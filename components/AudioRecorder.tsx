import React, { useEffect, useRef, useState } from 'react';

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);
    const mediaRecorderRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const handleDataAvailable = (event) => {
            if (event.data.size > 0) {
                setAudioChunks((prev) => [...prev, event.data]);
            }
        };

        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        }
    }, [mediaRecorderRef]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    };

    const getAudioURL = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const audioURL = URL.createObjectURL(audioBlob);
        return audioURL;
    };

    return (
        <div>
            <h2>Audio Recorder</h2>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {audioChunks.length > 0 && (
                <audio ref={audioRef} controls src={getAudioURL()} />
            )}
        </div>
    );
};

export default AudioRecorder;