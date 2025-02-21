<script setup lang="ts">
import FruitsList from "~/components/home/FruitsList.vue";
import {useFruitsStore} from "~/store/useFruitsStore";
const { getFruitsData } = useFruitsStore();

const { fruitsList } = storeToRefs(useFruitsStore())

onMounted(async () => {
	if (fruitsList.value?.length) return;
	await getFruitsData();
})
</script>

<template>

	<div class="header-container">
		<h2 class="main-label">Fruit explorer</h2>

		<NuxtLink class="link favorite" to="/favorite">Favorite</NuxtLink>

	</div>

	<FruitsList :fruits-list="fruitsList" />
</template>

<style>

.header-container {
	grid-area: header;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	align-items: self-start;
	margin-bottom: 2rem;
}


.main-label {
	grid-column: 1/5;
	grid-row: 1/2;
	font-size: 1.5rem;
	color: darkslateblue;
}

.link {
	font-size: 1rem;
	text-decoration: none;
	color: blueviolet;
	transition: color 0.3s ease-in-out 0s;
	&.favorite {
		grid-column: 12/13;
		grid-row: 1/2;
	}
	&:hover {
		color: darkviolet;
		text-decoration: underline;
	}
}

</style>
