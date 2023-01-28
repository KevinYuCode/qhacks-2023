import os
import json
from flask import Flask, request, session
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
from Instructions import prompt_response
from RelatedQuestions import RelatedQuestions


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
    session['prompt'] = prompt
    res = prompt_response("Write a long detailed list answer to the question:" + prompt)
    return {"response" : res}


# To get suggestions and their contents
@app.route("/suggestions", methods=["GET"])
@cross_origin()
def get_suggestions():

    # First clear past suggestions, then get new ones (Google API)
    session.pop('suggestions', default=None)
    suggest = RelatedQuestions()
    suggestions = []

    related_questions = suggest.get_related_questions(session['prompt'])
    related_searches = suggest.get_related_searches(session['prompt'])
    session.pop('prompt', default=None)
    
    if related_questions and related_searches:
            suggestions += related_questions + related_searches
    elif related_searches:
        suggestions += related_searches
    elif related_questions:
        suggestions += related_questions

    session['suggestions']  = suggestions

    # Call OpenAI API (in parallel ideally) for each suggestion
    suggestions_res = {}

    if len(suggestions) <= 4:
        for suggestion in suggestions:
            suggestions_res[suggestion] = prompt_response(suggestion)
    else:
        for i in range(3):
            suggestions_res[suggestions[i]] = prompt_response(suggestions[i])
    
    return json.dumps(suggestions_res)
    

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
