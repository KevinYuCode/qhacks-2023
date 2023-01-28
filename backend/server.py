import os
import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
from Instructions import prompt_response
from RelatedQuestions import RelatedQuestions
from concurrent.futures import ThreadPoolExecutor

load_dotenv()
app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] =  os.getenv("secret_key")

# To call OpenAI API
# Requires: json data: {"prompt" : "A chatGPT prompt"}
@app.route("/response", methods=["POST"])
@cross_origin()
def get_response():
    # At this point, use prompt to call OpenAI API
    prompt = request.json['prompt']
    res = prompt_response("Write a long detailed list answer to the question:" + prompt)
    return {"response" : res}


# To get suggestions and their contents
@app.route("/suggestions", methods=["POST"])
@cross_origin()
def get_suggestions():
    prompt = request.json['prompt']
    # clear past suggestions
    suggest = RelatedQuestions()
    suggestions = []

    prompt = request.json['prompt']
    # Call Google suggestion API and reset session prompt
    related_questions = suggest.get_related_questions(prompt)
    related_searches = suggest.get_related_searches(prompt)
    
    # Add stuff to list depending on if we got results from the API or not
    if related_questions and related_searches:
            suggestions += related_questions + related_searches
    elif related_searches:
        suggestions += related_searches
    elif related_questions:
        suggestions += related_questions

    # Call OpenAI API in parallel for each suggestion
    pool = ThreadPoolExecutor(max_workers=4)

    # We don't want to call OpenAI more than 4 times, so limit the list length
    if len(suggestions) <= 4:
        # This returns a list in order after all tasks are complete
        results = list(pool.map(prompt_response, suggestions))
    else:
        results = list(pool.map(prompt_response, suggestions[:4]))

    # Match titles to thread results
    res = []
    suggestions_res = {"suggestions": res}

    for i in range(len(results)):
        res.append({
            "title": suggestions[i],
            "description": results[i]
        })

    # Jsonify and return as arrays of answers
    return suggestions_res
    

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
