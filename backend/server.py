import os
import json
from flask import Flask, request, session
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv


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
    res = prompt
    return {"response" : res}


# To get suggestions and their contents
@app.route("/suggestions", methods=["GET"])
@cross_origin()
def get_suggestions():

    # First clear past suggestions, then get new ones (Google API)
    # use session['prompt'] to generate suggestions
    # then do session.pop('prompt', default=None) to clear it
    session.pop('suggestions', default=None)
    session['suggestions']  = ["testing1", "testing2", "testing3"]

    # Call OpenAI API (in parallel ideally) for each suggestion
    suggestions_res = {}
    for suggestion in session['suggestions']:
        suggestions_res[suggestion] = "response"
    
    return json.dumps(suggestions_res)
    

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
