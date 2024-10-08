import fm from 'front-matter';
import markdownit from 'markdown-it';
import fs from 'node:fs/promises';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const content = await fs.readFile(`src/lib/books/${params.slug}.md`, 'utf8');

    if (!content) throw error(404);

    const metadata = fm(content);
    
    const md = markdownit({
        breaks: true,
    });
    const reviewHtml = md.render(metadata.body);

    return {
        title: metadata.attributes?.title,
        author: metadata.attributes?.author,
        image: metadata.attributes?.image,
        reviewHtml
    };
}