<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const formatter = Intl.DateTimeFormat();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Home</h1>
	{#each data.posts.filter(p => !p.hidden) as post, i (i)}
		<div class="card">
			<h2><a href="/{post.slug}">{post.frontmatter.title || 'Blog Post'}</a></h2>
			<p>{post.frontmatter.description || 'No Description'}</p>
			<date>{formatter.format(new Date(post.frontmatter.date || '0'))}</date>
		</div>
	{:else}
		<h3>No blog posts!</h3>
	{/each}
</section>

<style></style>
