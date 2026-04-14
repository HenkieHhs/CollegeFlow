import { NextResponse } from 'next/server';
import { transcribeAudio } from '@/lib/transcribe'; // Assuming you have a transcription library
import { summarizeText } from '@/lib/summarize'; // Assuming you have a summarization library

export async function POST(request) {
    try {
        const { audioFile } = await request.json(); // Assuming the audio file comes in the request body
        const transcription = await transcribeAudio(audioFile);
        const summary = await summarizeText(transcription);
        
        return NextResponse.json({ transcription, summary });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to process audio file' }, { status: 500 });
    }
}