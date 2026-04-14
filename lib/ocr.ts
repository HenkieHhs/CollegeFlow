// Import Tesseract.js library
import Tesseract from 'tesseract.js';

// Optical Character Recognition function
export const recognizeText = (imagePath) => {
    return new Promise((resolve, reject) => {
        Tesseract.recognize(
            imagePath,
            'eng', // Default language is English
            { logger: info => console.log(info) } // Optional logger
        )
        .then(({ data: { text } }) => {
            resolve(text);
        })
        .catch((error) => {
            reject(error);
        });
    });
};

// Example function that recognizes text in Dutch
export const recognizeTextInDutch = (imagePath) => {
    return new Promise((resolve, reject) => {
        Tesseract.recognize(
            imagePath,
            'nld', // Dutch language code
            { logger: info => console.log(info) } // Optional logger
        )
        .then(({ data: { text } }) => {
            resolve(text);
        })
        .catch((error) => {
            reject(error);
        });
    });
};
