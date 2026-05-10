import { useState } from "react";
import "./pdf_reader.css";
function PDF_READER() {

    const [pdf_upload, setpdf_uploads] = useState(null);

    const handleFile = (e) => {
        const file = e.target.files[0];
        alert(file.name);
        
       
        

        setpdf_uploads(file);

        console.log(file);
    };
    
const uploadPDF = async () => {

        const formData = new FormData();

        formData.append("file", pdf_upload);

        const response = await axios.post(
            "http://127.0.0.1:8000/fact_check",
            formData
        );

        setResult(response.data.result);
    };
    return (
        <div>
            <input
                type="file"
                id="file_reader"
                accept=".pdf"
                onChange={handleFile}
            />
          
        </div>
    );
}

export default PDF_READER;