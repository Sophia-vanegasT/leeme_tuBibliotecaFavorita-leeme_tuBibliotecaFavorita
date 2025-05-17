export const formatBookTitle = (title: string): string => {
    return title.trim().replace(/\s+/g, ' ');
};

export const saveToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string): any => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const removeFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
};

export const calculateReadingProgress = (totalBooks: number, readBooks: number): number => {
    return totalBooks > 0 ? (readBooks / totalBooks) * 100 : 0;
};