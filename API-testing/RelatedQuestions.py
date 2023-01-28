from dotenv import load_dotenv
from serpapi import GoogleSearch
import os
import string

load_dotenv()


class RelatedQuestions:

    def __init__(self):
        #self.api_key = os.getenv("secret-api-key")
        self.params = {
            # "q": "How to wake up earlier",
            "google_domain": "google.com",
            "hl": "en",
            "gl": "us",
            "api_key": os.getenv("secret-api-key")
        }

    def get_related_questions(self, prompt: string):
        self.params["q"] = prompt
        search = GoogleSearch(self.params)
        results = search.get_dict()
        if "related_questions" in results:
            related_questions = results["related_questions"]
            RQ_questions = [sub['question']
                            for sub in related_questions]
            return RQ_questions
        else:
            return None

    def get_related_searches(self, prompt: string):
        self.params["q"] = prompt
        search = GoogleSearch(self.params)
        results = search.get_dict()
        if "related_searches" in results:
            related_searches = results["related_searches"]
            RS_query = [sub['query']
                        for sub in related_searches]
            return RS_query
        else:
            return None


if __name__ == "__main__":
    questions = RelatedQuestions()
    prompt = "How to stop procrastination"
    resRQ = questions.get_related_questions(prompt)
    resRS = questions.get_related_searches(prompt)
    if resRQ:
        print(resRQ)
    else:
        print(resRS)
    # print("Related Questions:\n", resRQ)
    # print("Related Searches:\n", resRS)
