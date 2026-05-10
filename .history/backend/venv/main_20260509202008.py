from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import PyPDF2
import tempfile
import os

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

    # Save PDF to temp file (fixes the 500 error)
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name

    # Extract Text
    extracted_text = ""
    with open(tmp_path, "rb") as pdf_file:
        reader = PyPDF2.PdfReader(pdf_file)
        for page in reader.pages:
            text = page.extract_text()
            if text:
                extracted_text += text

    os.unlink(tmp_path)

    # AI Response
    response = model.generate_content(f"""
Fact check this PDF. Return ONLY this format:

TRUTH: 85%
LIE: 15%
EXPLANATION: your explanation here

PDF CONTENT:
{extracted_text}
""")

    # Parse the result
    truth_pct = "N/A"
    lie_pct = "N/A"
    explanation = ""

    for line in response.text.strip().splitlines():
        if line.upper().startswith("TRUTH:"):
            truth_pct = line.split(":", 1)[1].strip()
        elif line.upper().startswith("LIE:"):
            lie_pct = line.split(":", 1)[1].strip()
        elif line.upper().startswith("EXPLANATION:"):
            explanation = line.split(":", 1)[1].strip()

    return {
        "truth": truth_pct,
        "lie": lie_pct,
        "explanation": explanation
    }