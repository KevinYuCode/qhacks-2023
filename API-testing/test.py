from serpapi import GoogleSearch

params = {
    "q": "How to wake up earlier",
    "google_domain": "google.com",
    "hl": "en",
    "gl": "us",
    "api_key": "secret-api-key"
}

search = GoogleSearch(params)
results = search.get_dict()
# results["related_questions"][0]["question"]
related_questions = results["related_questions"]
result = [sub['question'] for sub in related_questions]  # get only questions
print(result)
