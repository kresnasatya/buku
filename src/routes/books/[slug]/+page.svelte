<script>
    import { page } from '$app/state';
    import books from '$lib/books.json';

    let { data } = $props();
    
    const book = $derived(data.book);

    const currentSlug = $derived(page.params.slug);
    const currentIndex = $derived(books.findIndex(book => book.slug === currentSlug));
    const prevBook = $derived(currentIndex > 0 ? books[currentIndex - 1] : null);
    const nextBook = $derived(currentIndex < books.length - 1 ? books[currentIndex + 1] : null);

</script>

<svelte:head>
    <title>{book.title} - buku.kresna.me</title>
    <meta name="description" content="{book.description != '' ? book.description : "Kresna's books collection. Some has read and some not yet."}">
    <meta name="og:type" content="website">
    <meta name="og:title" content="{book.title} - buku.kresna.me">
    <meta name="og:description" content="{book.description != '' ? book.description : `I review book with title ${book.title} written by ${book.author} in Bahasa Indonesia and English`}">
    <meta name="og:image" content="https://buku.kresna.me/books/img/{book.image}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{book.title} - buku.kresna.me">
    <meta name="twitter:description" content="{book.description != '' ? book.description : `I review book with title ${book.title} written by ${book.author} in Bahasa Indonesia and English`}">
    <meta name="twitter:image" content="https://buku.kresna.me/books/img/{book.image}">
</svelte:head>

<a href="/">Back</a>

<div style="display: flex; justify-content: space-around;">
    <img style="align-self: flex-start;" src="/books/img/{book.image}" alt="{book.title} book cover">

    <div>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
    </div>
</div>

<h2>Review</h2>

<article>
    {@html book.reviewHtml}
</article>

<div class="prev-next">
    {#if prevBook}
        <div class="pager">
            <a href="/books/{prevBook.slug}" style="text-decoration: none;">
                <span style="display: block; font-size: small; color: dimgray;">Previous</span>
                <span style="display: block; color: black;">{prevBook.title}</span>
            </a>
        </div>
    {:else}
        <div>&nbsp;</div>
    {/if}

    {#if nextBook}
        <div class="pager">
            <a href="/books/{nextBook.slug}" style="text-decoration: none;">
                <span style="display: block; font-size: small; color: dimgray;">Previous</span>
                <span style="display: block; color: black;">{nextBook.title}</span>
            </a>
        </div>
    {:else}
        <div>&nbsp;</div>
    {/if}
</div>

<style>
    img {
        width: 240px;
        max-width: 240px;
        height: 360px;
        max-height: 360px;
        object-fit: cover;
    }

    h1, h2 {
        font-family: 'DM Serif Display', serif;
    }

    article :global {
        h3, p, ol, ul {
            font-size: 1.25rem;
        }

        blockquote {
            color: gray;
        }
    }

    .prev-next {
		margin-top: 1rem;
		display: grid;
		gap: 16px;
	}

	@media screen and (min-width: 1280px) {
		.prev-next {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.pager {
		border: 1px solid gainsboro;
		border-radius: 0.25rem;
		padding: 1rem;
	}
</style>