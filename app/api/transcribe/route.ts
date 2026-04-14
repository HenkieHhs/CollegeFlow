import { NextResponse } from 'next/server';

export async function POST(request) {
    const audioFile = await request.formData().get('audio');
    const response = await fetch('https://api-inference.huggingface.co/models/openai/whisper-large', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer YOUR_HUGGING_FACE_API_KEY`,
        },
        body: audioFile,
    });

    if (!response.ok) {
        return NextResponse.json({ error: 'Transcription failed.' }, { status: 500 });
    }

    const transcription = await response.json();
    return NextResponse.json(transcription);
}