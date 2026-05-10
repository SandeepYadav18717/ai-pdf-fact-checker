from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import PyPDF2
import io                  # ← only this added

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(api_key="AIzaSyB-Y6kLc19fjX8GBwKdgSEfN3l7iKF7KoA")
model = genai.GenerativeModel("gemini-2.0-flash")

@app.get("/")
def home():
    return {"message": "Backend Working"}

@app.post("/fact_check")
async def fact_check(file: UploadFile = File(...)):

    contents = await file.read()                    # ← read into memory
    reader = PyPDF2.PdfReader(io.BytesIO(contents)) # ← no file saving needed

    extracted_text = ""
    for page in reader.pages:
        text = page.extract_text()
        if text:
            extracted_text += text

    response = model.generate_content(f"""
Analyze this PDF and give:

1. Truth Percentage
2. Fake Percentage
3. Short Explanation

Return format:

Truth Score: 85%
Fake Score: 15%

Explanation:
...

PDF CONTENT:
{extracted_text}
""")

    return {
        "result": response.text
    }