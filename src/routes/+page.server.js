import fm from 'front-matter';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function load() {
    const files = await fs.readdir('src/lib/books');
    const mdFiles = files.filter(file => path.extname(file).toLowerCase() === '.md');
    const data = [];
    for (const mdFile of mdFiles) {
        const content = await fs.readFile(`src/lib/books/${mdFile}`, 'utf8');
        const metadata = fm(content);
        metadata.attributes['slug'] = mdFile.split('.md')[0];
        data.push(metadata.attributes);
    }
    
    return {
        books: data
    };
}