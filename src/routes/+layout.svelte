<script>
	import './styles.css';
	import 'highlight.js/styles/base16/gigavolt.css';
</script>

<div class="app">
	<header>
		<a href="/">&lt; Home</a>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>
			<a href="https://funnyboyroks.com" target="_blank">Website</a>
			|
			<a href="https://github.com/funnyboy-roks" target="_blank">GitHub</a>
			|
			<a href="https://api.funnyboyroks.com/discord" target="_blank">Discord</a>
		</p>
		<p>Made with 💚 by funnyboy_roks</p>
	</footer>
</div>

<style>
	main {
		min-height: 100vh;
	}

	footer {
		padding: 0 1rem;
		border-top: 2px solid var(--outline-color);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
