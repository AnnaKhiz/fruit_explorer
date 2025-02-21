<script setup lang="ts">
import FruitsList from "~/components/home/FruitsList.vue";
import {useFruitsStore} from "~/store/useFruitsStore";
const { getFruitsData } = useFruitsStore();

onMounted(async () => {
	await getFruitsData();
})
</script>

<template>
	<h2 class="main-label">Fruit explorer</h2>
	<FruitsList />
</template>

<style scoped>


.main-label {
	grid-area: header;
	grid-column: 1/13;
	grid-row: 1/2;
	margin-bottom: 2rem;
	font-size: 1.5rem;
	color: darkslateblue;

}


</style>
