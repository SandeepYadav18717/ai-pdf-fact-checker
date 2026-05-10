
# =========================
# FILE NAME: main.py
# =========================

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import PyPDF2
import anthropic

# =========================
# FAST API APP
# =========================

app = FastAPI()

# =========================
# CORS
# =========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# ANTHROPIC API
# =========================

client = anthropic.Anthropic(
    api_key="YOUR_ANTHROPIC_API_KEY"
)

# =========================
# HOME ROUTE
# =========================

@app.get("/")
def home():

    return {
        "message": "server run"
    }

# =========================
# PDF FACT CHECK API
# =========================

@app.post("/fact_check")
async def fact_check(file: UploadFile = File(...)):

   
    with open(file.filename, "wb") as f:

        f.write(await file.read())

    
    extract__text = ""

    with open(file.filename, "rb") as pdf_file:

        reader = PyPDF2.PdfReader(pdf_file)

        for page in reader.pages:

            text = page.extract_text()

            if text:

                extracted_text += text

    # Send to Claude AI
    response = client.messages.create(

        model="claude-3-5-sonnet-20241022",

        max_tokens=1000,

        messages=[
            {
                "role": "user",
                "content": f"""
                Fact check this PDF.

                Find:
                - misinformation
                - fake claims
                - unsupported facts
                - suspicious statements

                PDF CONTENT:
                {extracted_text}
                """
            }
        ]
    )

    result = response.content[0].text

    return {
        "result": result
    }