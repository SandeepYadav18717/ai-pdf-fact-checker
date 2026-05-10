function PDF_READER() {
    [pdf_upload,setpdf_uploads] = useState(null);
    if (pdf_upload)==null{
        alert(console.log("pdf upload is null");
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