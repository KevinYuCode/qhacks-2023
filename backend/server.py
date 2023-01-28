from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/response", methods=["POST"])
@cross_origin()
def get_response():
    client_data = request.json
    print(client_data['data'])
    return {
        "What you have sent" : client_data['data']
    }

# @app.route()

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
