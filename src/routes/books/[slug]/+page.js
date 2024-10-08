import books from '$lib/books.json';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const book = books.find(book => book.slug === params.slug);

    if (!book) throw error(404);
    
    return { book };
}