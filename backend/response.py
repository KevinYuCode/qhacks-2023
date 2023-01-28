import openai

prompt = "Write a long detailed list answer to the question: How to deal with addiction"

def prompt_response (prompt):

    openai.api_key = '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'

    COMPLETIONS_MODEL = "text-davinci-003"

    response = openai.Completion.create(
    prompt=prompt,
    temperature=0,
    max_tokens=300,
    model=COMPLETIONS_MODEL,
    stop=["7."]
    )["choices"][0]["text"].strip(" \n")

    return response