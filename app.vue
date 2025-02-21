<template>
	<div class="container" >
		<NuxtPage />
	</div>
</template>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

html, body {
	font-size: 16px;
}

.container {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: auto;
	grid-template-areas:
		"header header header header header header header header header header header header"
		"main main main main main main main main main main main main";
	padding: 1.5rem 1.8rem;
}

</style>
<script setup lang="ts">
</script>
