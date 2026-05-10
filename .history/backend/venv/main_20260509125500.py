from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import openai
import PyPDF2
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = openai.OpenAI(api_key="sk-abcdef1234567890abcdef1234567890abcdef12")


@app.get("/")
def home():
    return {"message": "Backend Working"}


@app.post("/fact_check")
async def fact_check(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        pdf_file = io.BytesIO(contents)

        # Extract text from PDF
        extracted_text = ""
        reader = PyPDF2.PdfReader(pdf_file)
        for page in reader.pages:
            text = page.extract_text()
            if text:
                extracted_text += text

        if not extracted_text.strip():
            raise HTTPException(status_code=400, detail="Could not extract text from PDF.")

        # OpenAI API call
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "user",
                    "content": f"""Analyze this PDF and give:

1. Truth Percentage
2. Fake Percentage
3. Short Explanation

Return format:

Truth Score: 85%
Fake Score: 15%

Explanation:
...

Find:
- fake claims
- misinformation
- unsupported facts

PDF CONTENT:
{extracted_text}"""
                }
            ]
        )

        return {"result": response.choices[0].message.content}

    except HTTPException:
        raise
    except Exception as e:
        print("ERROR:", e)
        raise HTTPException(status_code=500, detail=str(e))