<script>
    export let data;
</script>

<h1>buku.kresna.me</h1>
<p>These are my books collection. Half of them I have read and others not yet. How about you?</p>

<div class="books-grid">
    {#each data.books as book}
        <div class="p-4" style="display: flex; flex-direction: column; background-color: lightgray; align-items: center;">
            <h2 style="text-align: center;"><a href={`books/${book.slug}`}>{book.title}</a></h2>
            <img src="/books/img/{book.image}" alt="{book.title} cover book" />
        </div>
    {/each}
</div>

<style>
    .books-grid {
        display: grid; 
        gap: 1rem;
    }

    @media screen and (min-width: 480px) {
        .books-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 900px) {
        .books-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    img {
        width: 240px;
        max-width: 240px;
        height: 360px;
        max-height: 360px;
        object-fit: cover;
    }
</style>