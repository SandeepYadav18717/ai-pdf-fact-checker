import { useState } from "react";
import "./pdf_reader.css";
function PDF_READER() {

    const [pdf_upload, setpdf_uploads] = useState(null);

    const handleFile = (e) => {
        const file = e.target.files[0];
        alert(file.name);
        const file_name= file.name;
       
        

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
           
        </div>
    );
}

export default PDF_READER;