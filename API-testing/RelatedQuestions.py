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

    def get_related_questions(self, query: string):
        self.params["q"] = query
        search = GoogleSearch(self.params)
        results = search.get_dict()
        # results["related_questions"][0]["question"]
        related_questions = results["related_questions"]
        RQ_questions = [sub['question']
                        for sub in related_questions]  # get only questions
        return RQ_questions


if __name__ == "__main__":
    questions = RelatedQuestions()
    result = questions.get_related_questions("How to deal with depression")
    print(result)
