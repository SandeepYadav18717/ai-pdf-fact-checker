import { useState } from "react";
import "./pdf_reader.css";

function PDF_READER() {

  const [pdf_upload, setpdf_uploads] = useState(null);

  const [result, setResult] = useState("");

  const handleFile = (e) => {

    const file = e.target.files[0];

    setpdf_uploads(file);
  };

  const uploadPDF = async () => {

    if (!pdf_upload) {

      alert("Upload PDF");

      return;
    }

    const formData = new FormData();

    formData.append("file", pdf_upload);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/fact_check",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      setResult(data.result);

    } catch (error) {

      console.log(error);

      alert("Error connecting backend");
    }
  };

  return (

    <div>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFile}
      />

      <button onClick={uploadPDF}>
        Fact Check
      </button>

      <h2>{result}</h2>

    </div>
  );
}

export default PDF_READER;