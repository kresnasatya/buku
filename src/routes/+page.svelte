<script>
    let { data } = $props();
</script>

<svelte:head>
    <title>buku.kresna.me</title>
    <meta name="description" content="Kresna's books collection. Some has read and some not yet.">
    <meta name="og:type" content="website">
    <meta name="og:title" content="buku.kresna.me">
    <meta name="og:description" content="Kresna's books collection. Some has read and some not yet.">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="buku.kresna.me">
    <meta name="twitter:description" content="Kresna's books collection. Some has read and some not yet.">
</svelte:head>

<h1 style="font-family: 'DM Serif Display', serif;">buku.kresna.me</h1>
<p>These are my books collection. So far I have {data.books.length} books. Half of them I have read and others not yet. How about you?</p>

<div class="books-grid">
    {#each data.books as book}
        <div class="p-4" style="display: flex; flex-direction: column; align-items: center; border: 1px solid lightgray; border-radius: 1rem;">
            {#if book.image}
            <img style="margin-top: 1rem;" src="/books/img/{book.image}" alt="{book.title} cover book" />
            {:else}
            <div class="book-cover-thumbnail"></div>
            {/if}
            <div>
                <h2 style="font-family: 'DM Serif Display', serif; font-size: 1.25rem; line-height: normal;"><a style="color: black;" href={`books/${book.slug}`}>{book.title}</a></h2>
                <p>{book.author}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .books-grid {
        display: grid; 
        gap: 1rem;
    }

    @media screen and (min-width: 640px) {
        .books-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 900px) {
        .books-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (min-width: 1280px) {
        .books-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    img {
        width: 240px;
        max-width: 240px;
        height: 360px;
        max-height: 360px;
        object-fit: cover;
    }

    .book-cover-thumbnail {
        width: 240px;
        max-width: 240px;
        height: 360px;
        background-color: blanchedalmond;
    }
</style>