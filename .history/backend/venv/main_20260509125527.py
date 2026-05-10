from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import PyPDF2
import os
import tempfile
import traceback

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(api_key="AIzaSyB-Y6kLc19fjX8GBwKdgSEfN3l7iKF7KoA")
model = genai.GenerativeModel("gemini-1.5-flash")


@app.get("/")
def home():
    return {"message": "Backend Working"}


@app.post("/fact_check")
async def fact_check(file: UploadFile = File(...)):

    # Use a temp file so there are no permission or path issues
    tmp = tempfile.NamedTemporaryFile(delete=False, suffix=".pdf")
    file_path = tmp.name

    try:
        # Save uploaded PDF to temp file
        contents = await file.read()
        tmp.write(contents)
        tmp.close()

        # Extract text
        extracted_text = ""
        with open(file_path, "rb") as pdf_file:
            reader = PyPDF2.PdfReader(pdf_file)
            for page in reader.pages:
                text = page.extract_text()
                if text:
                    extracted_text += text

        if not extracted_text.strip():
            raise HTTPException(status_code=400, detail="Could not extract text from PDF.")

        # Gemini API call
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

Find:
- fake claims
- misinformation
- unsupported facts

PDF CONTENT:
{extracted_text}
        """)

        return {"result": response.text}

    except HTTPException:
        raise
    except Exception as e:
        # Print full traceback to your terminal so you can see the real error
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        if os.path.exists(file_path):
            os.remove(file_path)