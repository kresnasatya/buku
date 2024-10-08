<script>
    export let data;
    let book = data.book;
</script>

<a href="/">Back</a>

<div style="display: flex; justify-content: space-around;">
    <img style="align-self: flex-start;" width="240" src="/books/img/{book.image}" alt="{data.title} book cover">

    <div>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
    </div>
</div>

<h2>Review</h2>
{@html book.reviewHtml}