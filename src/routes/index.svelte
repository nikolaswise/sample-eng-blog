<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 1.2em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 2em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Sample Engineering Blog</h1>

<p>This is a <a href="https://sapper.svelte.dev/" target="_blank">Sapper App</a> thats consuming blog data from <a href="https://www.contentful.com" target="_blank">Contentful.</a></p>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
