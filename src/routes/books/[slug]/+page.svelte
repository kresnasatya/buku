<script>
    let { data } = $props();
    let book = $derived(data.book);
</script>

<svelte:head>
    <title>{book.title} - buku.kresna.me</title>
    <meta name="description" content="{book.description != '' ? book.description : "Kresna's books collection. Some has read and some not yet."}">
    <meta name="og:type" content="website">
    <meta name="og:title" content="{book.title} - buku.kresna.me">
    <meta name="og:description" content="{book.description != '' ? book.description : "Kresna's books collection. Some has read and some not yet."}">
    <meta name="og:image" content="https://book.kresna.me/books/img/{book.image}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{book.title} - buku.kresna.me">
    <meta name="twitter:description" content="{book.description != '' ? book.description : "Kresna's books collection. Some has read and some not yet."}">
    <meta name="twitter:image" content="https://book.kresna.me/books/img/{book.image}">
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
{@html book.reviewHtml}

<style>
    img {
        width: 240px;
        max-width: 240px;
        height: 360px;
        max-height: 360px;
        object-fit: cover;
    }
</style>