export interface Book {
    id: string;
    title: string;
    author: string;
    status: 'read' | 'reading' | 'to-read';
    isFavorite: boolean;
}

export interface User {
    id: string;
    name: string;
    email: string;
    readingGoals: number;
    booksRead: number;
}