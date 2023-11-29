const API_URL = import.meta.env.VITE_API_URL;

export async function getAllBooks() {
    const response = await fetch(`${API_URL}books`);
    if (!response.ok) {
        return null;
    }

    return await response.json();
}

export async function getBook(id = 0) {
    const response = await fetch(`${API_URL}books/${id}`);
    if (!response.ok) {
        return null;
    }

    return await response.json();
}

export async function getBookByName(name = '') {
    const response = await fetch(`${API_URL}books?search=${name}`);
    if (!response.ok) {
        return null
    }

    return await response.json();
}