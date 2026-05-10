# ai-pdf-fact-checker
pdf fact check


---

---
Pdf extract/Screenshot 2026-05-10 011326.png
# AI PDF Fact Checker Documentation

## Project Title

AI PDF Fact Checker Using FastAPI, React.js, and Gemini AI

---

# 1. Introduction

AI PDF Fact Checker is an AI-powered web application developed using React.js, FastAPI, and Google Gemini AI.

The purpose of this project is to automatically analyze PDF documents and identify:

* Fake claims
* Unsupported statements
* Misinformation
* Truth percentage
* Fake percentage

The system extracts text from uploaded PDF files and sends the extracted content to Gemini AI for intelligent fact-checking analysis.

---

# 2. Objective

The main objectives of this project are:

* Automate PDF fact-checking
* Reduce manual verification work
* Detect misinformation using AI
* Build a modern AI-powered web application
* Learn integration between frontend, backend, and AI models

---

# 3. Technologies Used

## Frontend Technologies

* React.js
* Vite
* CSS3

## Backend Technologies

* FastAPI
* Python

## AI Technology

* Google Gemini 2.5 Flash

## PDF Processing

* PyPDF2

---

# 4. Software Requirements

The following software must be installed before running the project.

## 4.1 Python

Download Python from:

https://www.python.org/downloads/

### Important

During installation select:

Add Python to PATH

Check installation:

```bash
python --version
```

---

## 4.2 Node.js

Download Node.js from:

https://nodejs.org/

Check installation:

```bash
node -v
npm -v
```

---

## 4.3 Visual Studio Code

Download VS Code:

https://code.visualstudio.com/

---

# 5. Recommended VS Code Extensions

## Python Extension

* ms-python.python

## Pylance

* ms-python.vscode-pylance

## ES7 React Snippets

* dsznajder.es7-react-js-snippets

## Prettier

* esbenp.prettier-vscode

---

# 6. Project Folder Structure

```bash
New folder (2)/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── venv/
│
├── Pdf extract/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── pdf_reader.jsx
│   │   │   └── pdf_reader.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── public/
│
└── README.md
```

---

# 7. Backend Dependencies

Create a file named:

requirements.txt

Add the following:

```txt
fastapi
uvicorn
python-multipart
google-generativeai
PyPDF2
```

---

# 8. Frontend Installation

Go to frontend folder:

```bash
cd "Pdf extract"
```

Install all frontend packages:

```bash
npm install
```

Run frontend server:

```bash
npm run dev
```

Frontend URL:

```bash
http://localhost:5173
```

---

# 9. Backend Installation

Go to backend folder:

```bash
cd backend
```

---

## 9.1 Create Virtual Environment

```bash
python -m venv venv
```

---

## 9.2 Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

---

## 9.3 Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 9.4 Run FastAPI Server

```bash
uvicorn main:app --reload
```

Backend URL:

```bash
http://127.0.0.1:8000
```

---

# 10. Working of the Project

## Step 1 — Upload PDF

The user uploads a PDF document through the React frontend.

---

## Step 2 — File Sent to Backend

The frontend sends the PDF file to FastAPI using multipart/form-data.

---

## Step 3 — PDF Text Extraction

PyPDF2 extracts readable text from all pages of the PDF.

---

## Step 4 — AI Analysis

The extracted text is sent to Gemini AI.

Gemini analyzes:

* misinformation
* fake claims
* unsupported facts
* truth score

---

## Step 5 — Result Returned

The backend sends AI analysis results back to the frontend.

---

## Step 6 — Display Result

Frontend displays:

* Truth percentage
* Fake percentage
* Explanation

---

# 11. Frontend Explanation

## pdf_reader.jsx

This component handles:

* File uploads
* API communication
* Result rendering
* Truth/Fake count display

---

## pdf_reader.css

This file contains:

* Dark premium UI design
* Responsive layout
* Card animations
* Modern styling

---

# 12. Backend Explanation

## main.py

The backend performs:

* API creation
* File upload handling
* PDF extraction
* Gemini AI communication
* JSON response generation

---

# 13. API Endpoint

## POST /fact_check

Uploads PDF and returns:

* AI explanation
* Truth score
* Fake score

---

# 14. Gemini AI Prompt

Gemini receives:

* Extracted PDF text
* Fact-checking instructions
* Truth/Fake scoring instructions

The AI then generates a final analysis report.

---

# 15. Example Output

```txt
Truth Score: 85%
Fake Score: 15%

Explanation:
Some statements inside the PDF are unsupported and may contain misinformation.
```

---

# 16. Security Improvements

Current project uses hardcoded API key.

Instead of:

```python
api_key="YOUR_API_KEY"
```

Use environment variables:

```python
import os

api_key = os.getenv("GEMINI_API_KEY")
```

This improves security.

---

# 17. Future Improvements

Future upgrades can include:

* Pie Charts
* Downloadable Reports
* OCR Support
* Authentication System
* Database Integration
* Cloud Deployment
* AI Confidence Score
* Multiple PDF Uploads
* Highlight Fake Sentences
* Fact Verification Sources

---

# 18. Common Errors and Solutions

## Error: CORS Blocked

Solution:
Enable CORSMiddleware in FastAPI.

---

## Error: Module Not Found

Solution:

```bash
pip install -r requirements.txt
```

---

## Error: API Not Working

Check:

* Backend server running
* Frontend fetch URL correct
* Gemini API key valid

---

# 19. Advantages of the Project

* Saves time
* AI automation
* Detects misinformation quickly
* User-friendly interface
* Real-world AI application
* Modern web architecture

---

# 20. Limitations

* AI may sometimes generate inaccurate analysis
* Large PDFs may take longer
* Internet connection required
* Gemini API dependency

---

# 21. Conclusion

AI PDF Fact Checker is a complete AI-powered web application that automates document fact-checking using FastAPI, React.js, and Google Gemini AI.

The project demonstrates:

* Frontend and backend integration
* AI API usage
* PDF text extraction
* Modern web development
* Real-world AI implementation

This project can be expanded into a professional SaaS product for educational, research, and corporate fact-checking purposes.

---

# 22. Author

Developed By:
Sandeep

Technologies:

* React.js
* FastAPI
* Gemini AI
* PyPDF2










# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DOWNLOAD 1 — PYTHON
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What is Python?
Python is a programming language.
The backend server is written in Python.
Without Python, the backend will NOT run.

## Download Link
https://www.python.org/downloads/

## Steps to Install
1. Open the link above
2. Click the big yellow button "Download Python 3.12.x"
3. Open the downloaded file
4.  VERY IMPORTANT — before clicking install, check the box:
    "Add Python to PATH"
5. Click "Install Now"
6. Wait for it to finish
7. Click "Close"

## How to Verify Python Installed
Open Command Prompt and type:
```
python --version
```
You should see:
```
Python 3.12.x
```

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DOWNLOAD 2 — NODE.JS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What is Node.js?
Node.js runs JavaScript on your computer.
The frontend (React website) needs Node.js to run.
It also installs NPM which is used to install frontend packages.

## Download Link
https://nodejs.org/

## Steps to Install
1. Open the link above
2. Click "LTS" version (recommended for most users)
3. Open the downloaded file
4. Keep clicking Next → everything default is fine
5. Click Install
6. Wait for it to finish
7. Click Finish

## How to Verify Node Installed
Open Command Prompt and type:
```
node --version
```
You should see:
```
v20.x.x
```

Then type:
```
npm --version
```
You should see:
```
10.x.x
```

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DOWNLOAD 3 — VS CODE  ( OPTIONAL )
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What is VS Code?
VS Code is a code editor.
You use it to open and view all the project files.
It is not required to run the project but very helpful.

## Download Link
https://code.visualstudio.com/

## Steps to Install
1. Open the link above
2. Click "Download for Windows"
3. Open the downloaded file
4. Accept the agreement
5. Keep clicking Next → all default settings are fine
6. Click Install
7. Click Finish

## How to Open the Project in VS Code
1. Open VS Code
2. Click File → Open Folder
3. Select the project folder "New folder (2)"
4. All files will appear on the left side

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BACKEND LIBRARY 1 — FASTAPI
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What is FastAPI?
FastAPI is a Python web framework.
It creates the backend server.
It handles the API route /fact_check where the PDF is sent.
It also handles the /  route which confirms the server is working.

## Used In This Project For
- Creating the POST /fact_check endpoint
- Receiving the uploaded PDF file
- Sending back the AI result as JSON response

## Install Command
```
pip install fastapi
```

## Version to Install
Latest stable version ( pip installs latest by default )

## Where It Is Used in Code
```python
from fastapi import FastAPI, UploadFile, File
app = FastAPI()

@app.post("/fact_check")
async def fact_check(file: UploadFile = File(...)):
    ...
```

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BACKEND LIBRARY 2 — UVICORN
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What is Uvicorn?
Uvicorn is a server that runs FastAPI applications.
FastAPI alone cannot run by itself — it needs Uvicorn to start.
It is an ASGI server ( Asynchronous Server Gateway Interface ).

## Used In This Project For
- Starting the backend server on port 8000
- The --reload flag makes it auto-restart when you edit code

## Install Command
```
pip install uvicorn
```

## How to Start the Server Using Uvicorn
```
uvicorn main:app --reload
```

## What This Command Means
- main       → the filename is main.py
- app        → the FastAPI instance variable is called app
- --reload   → auto restart when code changes

## Server Runs At
```
http://127.0.0.1:8000
```

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BACKEND LIBRARY 3 — GOOGLE-GENERATIVEAI
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What is google-generativeai?
This is the official Python SDK ( Software Development Kit ) for Google Gemini AI.
It connects your Python code to Google's Gemini AI model.
Without this, the AI fact checking will NOT work.

## Used In This Project For
- Connecting to Google Gemini 2.5 Flash model
- Sending the extracted PDF text to the AI
- Getting back the Truth Score, Fake Score, and Explanation

## Install Command
```
pip install google-generativeai
```

## Where It Is Used in Code
```python
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")

model = genai.GenerativeModel("gemini-2.5-flash")

response = model.generate_content("your prompt here")
```

## About the API Key
- The project already has an API key inside main.py
- The key connects to Google's servers to use the AI
- Keep this key private — do not share it publicly

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BACKEND LIBRARY 4 — PyPDF2
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What is PyPDF2?
PyPDF2 is a Python library for reading PDF files.
It opens the uploaded PDF and extracts all the text from every page.
That extracted text is then sent to the AI for fact checking.

## Used In This Project For
- Opening the saved PDF file
- Looping through every page of the PDF
- Extracting all readable text from each page
- Combining all page text into one big string

## Install Command
```
pip install PyPDF2
```

## Where It Is Used in Code
```python
import PyPDF2

with open(file.filename, "rb") as pdf_file:
    reader = PyPDF2.PdfReader(pdf_file)
    for page in reader.pages:
        text = page.extract_text()
        if text:
            extracted_text += text
```

## Important Note
PyPDF2 only works on text-based PDFs.
If the PDF is a scanned image ( like a photo of a document ),
PyPDF2 cannot read it and will return empty text.

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BACKEND LIBRARY 5 — PYTHON-MULTIPART
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What is python-multipart?
python-multipart allows FastAPI to receive files uploaded from the frontend.
When the user clicks "Fact Check" and uploads a PDF,
the file travels from the browser to the backend as multipart/form-data.
FastAPI CANNOT handle file uploads without this library.

## Used In This Project For
- Receiving the PDF file that is uploaded from the React frontend
- Processing the multipart form data that carries the file

## Install Command
```
pip install python-multipart
```

## Why It Is Needed Separately
FastAPI does not include file upload support by default.
python-multipart is a separate package that adds this ability.
If you do not install it, the /fact_check endpoint will crash
when it receives an uploaded file.

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# INSTALL ALL BACKEND LIBRARIES AT ONCE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instead of installing each one separately, run this one command:

```
pip install -r requirements.txt
```

The requirements.txt file contains:
```
fastapi
uvicorn
google-generativeai
PyPDF2
python-multipart
```

All 5 libraries will be downloaded and installed automatically.

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# FRONTEND INSTALL — NODE PACKAGES
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Go into the frontend folder first
```
cd "Pdf extract"
```

## Install all frontend packages
```
npm install
```

This reads the package.json file and installs React, Vite,
and everything else the frontend needs automatically.

## Start the frontend
```
npm run dev
```

Website runs at:
```
http://localhost:5173
```

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# FULL ORDER — WHAT TO DO FROM ZERO
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1 → Download and install Python from python.org
Step 2 → Download and install Node.js from nodejs.org
Step 3 → Open Command Prompt → go to backend folder
Step 4 → python -m venv venv
Step 5 → venv\Scripts\activate
Step 6 → pip install -r requirements.txt
Step 7 → uvicorn main:app --reload
Step 8 → Open a second Command Prompt → go to frontend folder
Step 9 → npm install
Step 10 → npm run dev
Step 11 → Open browser → go to http://localhost:5173
Step 12 → Upload PDF → Click Fact Check → See Results

---

Both terminals must stay open while using the app.
