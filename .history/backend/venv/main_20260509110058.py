uvicorn main:app --reload
import { useState } from "react";
import axios from "axios";

function PDF_READER() {

    const [pdf_upload, setpdf_uploads] = useState(null);

    const [result, setResult] = useState("");

    const handleFile = (e) => {

        setpdf_uploads(e.target.files[0]);
    };

    const analyzePDF = async () => {

        if (!pdf_upload) {
            alert("Upload PDF");
            return;
        }

        const formData = new FormData();

        formData.append("file", pdf_upload);

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/fact_check",
                formData
            );

            setResult(response.data.result);

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div>

            <input
                type="file"
                accept=".pdf"
                onChange={handleFile}
            />

            <button onClick={analyzePDF}>
                Fact Check
            </button>

            <h2>{result}</h2>

        </div>
    );
}

export default PDF_READER;