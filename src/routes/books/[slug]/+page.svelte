<script>
    export let data;
</script>

<a href="/">Back</a>

<div style="display: flex; justify-content: space-around;">
    <img style="align-self: flex-start;" width="240" src="/img/{data.image}" alt="{data.title} book cover">

    <div>
        <h1>{data.title}</h1>
        <p>Author: {data.author}</p>
    </div>
</div>

<h2>Review</h2>
{@html data.reviewHtml}