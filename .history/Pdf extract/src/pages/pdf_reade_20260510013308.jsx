/**
 * The PDF_READER function in JavaScript React is a component that allows users to upload a PDF file, send it to a backend for fact-checking, and displays the total count of truth and false statements along with the backend result.
 * @returns The `PDF_READER` component is being returned. It consists of JSX elements for a PDF Fact Checker interface. The component includes an input field for uploading a PDF file, a button to trigger the fact-checking process, display areas for total truth and false counts, and a section to show the backend result.
 */
/**
 * The PDF_READER function in JavaScript React is a component that allows users to upload a PDF file, send it to a backend for fact-checking, and displays the total count of truth and false statements along with the backend result.
 * @returns The `PDF_READER` component is being returned. It consists of JSX elements for a PDF Fact Checker interface. The component includes an input field for uploading a PDF file, a button to trigger the fact-checking process, display areas for total truth and false counts, and a section to show the backend result.
 */
import { useState } from "react";
import "./pdf_reader.css";

function PDF_READER() {

  // Store uploaded PDF
  const [pdf_upload, setpdf_uploads] = useState(null);

  // Store backend result
  const [result, setResult] = useState("");

  // Store truth and false count
  const [truthCount, setTruthCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);

  // Handle PDF Upload
  const handleFile = (e) => {

    const file = e.target.files[0];

    if (!file) {
      alert("Upload PDF");
      return;
    }

    setpdf_uploads(file);

    console.log(file);
  };

  // Upload PDF to Backend
  const uploadPDF = async () => {

    if (!pdf_upload) {
      alert("Please upload PDF");
      return;
    }

    const formData = new FormData();

    formData.append("file", pdf_upload);

    const response = await fetch("http://127.0.0.1:8000/fact_check", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // Backend Result
    setResult(data.result);

    // Direct backend values
    setTruthCount(data.truth_total);
    setFalseCount(data.false_total);
  };

  return (
    
  <div className="full_box">
<h1>PDF Fact Checker</h1>
    <input
      type="file"
      id="file_reader"
      accept=".pdf"
      onChange={handleFile}
    />

    <br />

    <button className="upload_button" onClick={uploadPDF}>
      Fact Check
    </button>

    <div className="card_box">

      <div className="front_card truth_card">
        <h2>Total Truth</h2>
        <p>{truthCount}</p>
      </div>

      <div className="front_card false_card">
        <h2>Total False</h2>
        <p>{falseCount}</p>
      </div>

    </div>

    <div className="result_box">
      <h2>{result}</h2>
    </div>

  </div>
);
}

export default PDF_READER;