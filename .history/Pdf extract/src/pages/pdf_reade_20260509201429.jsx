import { useState } from "react";

function PDF_READER() {
  const [pdf_upload, setpdf_uploads] = useState(null);
  const [result, setResult] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setpdf_uploads(file);
  };

  const uploadPDF = async () => {
    const formData = new FormData();
    formData.append("file", pdf_upload);

    const response = await fetch("http://127.0.0.1:8000/fact_check", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Automated PDF Truth</h1>
      <input type="file" id="file_reader" accept=".pdf" onChange={handleFile} />
      <button onClick={uploadPDF}>Fact Check</button>

      {result && (
        <div>
          <h2 style={{ color: "green" }}>Truth: {result.truth}</h2>
          <h2 style={{ color: "red" }}>Lie: {result.lie}</h2>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default PDF_READER;