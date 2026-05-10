import { useState } from "react";
import "./pdf_reader.css";
function PDF_READER() {

    const [pdf_upload, setpdf_uploads] = useState(null);

    const handleFile = (e) => {
        const file = e.target.files[0];
        alert(file.name);
        if (!file) {
            alert("Upload PDF");
            return;
        }

        setpdf_uploads(file);

        console.log(file);
    };

    return (
        <div>
            <input
                type="file"
                id="file_reader"
                accept=".pdf"
                onChange={handleFile}
            />
            your file name is:{pdf_upload.name}
        </div>
    );
}

export default PDF_READER;