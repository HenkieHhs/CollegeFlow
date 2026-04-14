import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const OCRUploader = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleUpload = () => {
        if (image) {
            Tesseract.recognize(
                image,
                'eng',  
                { logger: (m) => console.log(m) }
            ).then(({ data: { text } }) => {
                setText(text);
            });
        }
    };

    return (
        <div>
            <h1>OCR Uploader</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload}>Extract Text</button>
            <div>
                <h2>Extracted Text:</h2>
                <p>{text}</p>
            </div>
            {image && <img src={image} alt="Uploaded media" style={{ maxWidth: '100%', maxHeight: '400px' }} />}
        </div>
    );
};

export default OCRUploader;