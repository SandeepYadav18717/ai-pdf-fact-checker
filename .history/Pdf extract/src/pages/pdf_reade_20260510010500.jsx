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
    <div className="main_container">

      {/* PDF Input */}
      <input
        type="file"
        id="file_reader"
        accept=".pdf"
        onChange={handleFile}
      />

      {/* Button */}
      <button className="upload_btn" onClick={uploadPDF}>
        Fact Check
      </button>

      {/* Cards */}
      <div className="card_container">

        <div className="result_card truth_card">
          <h2>Total Truth</h2>
          <p>{truthCount}</p>
        </div>

        <div className="result_card false_card">
          <h2>Total False</h2>
          <p>{falseCount}</p>
        </div>

      </div>

      {/* Result */}
      <div className="result_box">
        <h2>{result}</h2>
      </div>

    </div>
  );
}

export default PDF_READER;