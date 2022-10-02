<script lang="ts">
	import type { PageData } from "./$types";
    export let data: PageData;
</script>

<svelte:head>
    <title></title>
</svelte:head>

<div>
    
    {@html data.renderedContent}
    
</div>

<style>
    
</style>