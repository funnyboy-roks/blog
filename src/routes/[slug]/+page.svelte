<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { frontmatter } = data;
</script>

<svelte:head>
	<title>{frontmatter?.title || "Funny's Blog"}</title>
	{#if frontmatter}
		{#if frontmatter.title}
			<meta property="og:title" content={frontmatter.title} />
		{/if}
		{#if frontmatter.description}
			<meta property="og:description" content={frontmatter.description} />
		{/if}
        {/if}
    <meta property="og:type" content="article">
    <meta property="og:article:author" content="funnyboy_roks">
</svelte:head>

<div>
	{@html data.renderedContent}
</div>

<style>
</style>
