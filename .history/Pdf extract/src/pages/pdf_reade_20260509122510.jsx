import { useState } from "react";

function PDF_READER() {
  const [pdf_upload, setpdf_upload] = useState(null); // Fixed setter name
  const [result, setResult] = useState("");

  const handleFile = (e) => {
    setpdf_upload(e.target.files[0]);
  };

  const uploadPDF = async () => {
    const formData = new FormData();
    formData.append("file", pdf_upload);
    const response = await fetch("http://127.0.0.1:8000/fact_check", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h1>Automated pdf Truth</h1>
      <input type="file" accept=".pdf" onChange={handleFile} />
      <button onClick={uploadPDF}>Fact Check</button>
      <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
    </div>
  );
}

export default PDF_READER;