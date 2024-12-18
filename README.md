# buku.kresna.me

Kresna's book collection.

## About

This is a review book site for books I have read. Mostly I read a hardpaper book rather than digital book because the essence of hardpaper book is more different than the digital book.

## Technologies

I use markdown to write a book review, convert it into json with `markdown-it` and `gray-matter`. Then I transform the json into interface using SvelteKit framework. This site deploy to Netlify.

## How to?

1. Git clone
2. `pnpm install`
3. `pnpm run dev`

> Keep in mind that there's `book.js` and the `svelte.config.js` has a trigger to run `node book.js` each time markdown file updated.