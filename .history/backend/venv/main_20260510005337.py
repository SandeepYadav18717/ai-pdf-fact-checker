from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import PyPDF2

app = FastAPI()
@app.get("/")
def home():

    return {
        "message": "Backend Working"
    }

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gemini API Key
genai.configure(
    api_key="AIzaSyB-Y6kLc19fjX8GBwKdgSEfN3l7iKF7KoA"
)

# Gemini Model
model = genai.GenerativeModel("gemini-2.5-flash")

@app.post("/fact_check")
async def fact_check(file: UploadFile = File(...)):

    # Save PDF
    with open(file.filename, "wb") as f:
        f.write(await file.read())

    # Extract Text
    extracted_text = ""

    with open(file.filename, "rb") as pdf_file:

        reader = PyPDF2.PdfReader(pdf_file)

        for page in reader.pages:

            text = page.extract_text()

            if text:
                extracted_text += text

    # AI Response
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
    Fact check this PDF.

    Find:
    - fake claims
    - misinformation
    - unsupported facts

    PDF CONTENT:
    {extracted_text}

    """)

    return {
        "result": response.text
    }