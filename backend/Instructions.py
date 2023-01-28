import openai
import os
from dotenv import load_dotenv


def prompt_response(prompt):
    load_dotenv()
    openai.api_key = os.getenv("open-ai-key")

    COMPLETIONS_MODEL = "text-davinci-003"

    response = openai.Completion.create(
    prompt=prompt,
    temperature=0,
    max_tokens=300,
    model=COMPLETIONS_MODEL,
    stop=["7."]
    )["choices"][0]["text"].strip(" \n")

    return response.split("\n\n")