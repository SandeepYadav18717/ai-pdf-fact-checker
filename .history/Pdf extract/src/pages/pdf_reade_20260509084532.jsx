function PDF_READER() {
    [pdf_upload,setpdf_uploads] = useState(null);
    if (pdf_upload)==null{
        alert(console.log("upload pdf"));
        else{
            
        }
    }{
    return (
        <div>
            <input 
                type="file"
                id="file_reader"
            />
        </div>
    );
}

export default PDF_READER;