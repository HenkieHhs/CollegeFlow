// TypeScript interfaces for Summary, Flashcard, and User types

export interface Summary {
    title: string;
    content: string;
    createdAt: Date;
}

export interface Flashcard {
    question: string;
    answer: string;
    tags?: string[];
}

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
}