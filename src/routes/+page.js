import books from '$lib/books.json';

export async function load() {
    return {
        books
    };
}