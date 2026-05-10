import { useState } from "react";
import "./pdf_reader.css";
function PDF_READER() {
  // state to store the uploaded pdf file and the result from the backend
  const [pdf_upload, setpdf_uploads] = useState(null);
  const [result, setResult] = useState("");
// handle the file input and set the state
  const handleFile = (e) => {
    const file = e.target.files[0];
    alert(file.name);

    setpdf_uploads(file);

    console.log(file);
  };
// upload the pdf file to the backend and get the result
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
      <input type="file" id="file_reader" accept=".pdf" onChange={handleFile} />
      <button onClick={uploadPDF}>Fact Check</button>

      <h2>{result}</h2>
    </div>
  );
}

export default PDF_READER;
