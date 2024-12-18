import fs from 'node:fs/promises';
import path from 'node:path';
import markdownit from 'markdown-it';
import matter from 'gray-matter';

(async() => {
    const files = await fs.readdir(path.join(process.cwd(), 'static/books'));
    const mdFiles = files.filter(file => path.extname(file).toLowerCase() === '.md');

    const output = [];
    for (const mdFile of mdFiles) {
        const rawContent = await fs.readFile(path.join(process.cwd(), 'static/books', mdFile), 'utf8');
        const { content: body, data: attributes } = matter(rawContent);
        const { title, image, author } = attributes;
        const slug = mdFile.split('.md')[0];
        
        const md = markdownit({
            breaks: true
        });
        const reviewHtml = md.render(body);

        output.push({ title, slug, image, author, reviewHtml });
    }

    fs.writeFile(path.join(process.cwd(), 'src/lib/books.json'), JSON.stringify(output, null, " "), null);
})();