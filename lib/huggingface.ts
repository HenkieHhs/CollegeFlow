import axios from 'axios';

const HUGGINGFACE_API_URL = 'https://api-inference.huggingface.co/models/';
const API_KEY = '<YOUR_API_KEY>'; // Replace with your Hugging Face API key

const headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
};

export const transcribeAudio = async (audioFile) => {
    const url = `${HUGGINGFACE_API_URL}openai/whisper-large`; // Replace with the appropriate model

    const formData = new FormData();
    formData.append('file', audioFile);

    try {
        const response = await axios.post(url, formData, { headers });
        return response.data;
    } catch (error) {
        console.error('Error transcribing audio:', error);
        throw error;
    }
};

export const summarizeText = async (text) => {
    const url = `${HUGGINGFACE_API_URL}facebook/bart-large-cnn`; // Replace with the appropriate model

    try {
        const response = await axios.post(url, { inputs: text }, { headers });
        return response.data;
    } catch (error) {
        console.error('Error summarizing text:', error);
        throw error;
    }
};
