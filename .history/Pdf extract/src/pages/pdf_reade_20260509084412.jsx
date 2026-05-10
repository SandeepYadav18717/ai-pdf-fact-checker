function PDF_READER() {
    [pdf_upload,set pdf_upload] = useState(null);
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