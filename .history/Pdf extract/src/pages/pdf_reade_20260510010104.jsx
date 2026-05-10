import { useState } from "react";
import "./pdf_reader.css";

function PDF_READER() {
  const [pdf_upload, setpdf_uploads] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setpdf_uploads(file);
  };

  const uploadPDF = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", pdf_upload);

    const response = await fetch("http://127.0.0.1:8000/fact_check", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  };

  const truthMatch = result.match(/Truth Score:\s*(\d+)%/i);
  const fakeMatch  = result.match(/Fake Score:\s*(\d+)%/i);

  const truth = truthMatch ? truthMatch[1] : null;
  const fake  = fakeMatch  ? fakeMatch[1]  : null;

  return (
    <div className="container">
      <h1>Automated PDF Truth</h1>

      <div className="upload_box">
        <input type="file" id="file_reader" accept=".pdf" onChange={handleFile} style={{ display: "none" }} />
        <label htmlFor="file_reader">
          {pdf_upload ? `📄 ${pdf_upload.name}` : "Click to upload PDF"}
        </label>
      </div>

      <button className="btn" onClick={uploadPDF}>
        {loading ? "Analyzing..." : "Fact Check"}
      </button>

      {truth && (
        <div className="scores">
          <div>
            <div className="truth">{truth}%</div>
            <div className="label">✓ Truth</div>
          </div>
          <div>
            <div className="fake">{fake}%</div>
            <div className="label">✗ Lie</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PDF_READER;