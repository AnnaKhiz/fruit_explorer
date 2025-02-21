<script setup lang="ts">
import FruitsList from "~/components/home/FruitsList.vue";
import { useFruitsStore } from "~/store/useFruitsStore";
const { getFruitsData } = useFruitsStore();
import { useFilterStore } from "~/store/useFilterStore";
const { filterNutritionList } = storeToRefs(useFilterStore());
const { updateStartFilter, updateFilterNutrition, updateEndFilter, resetAllFilters } = useFilterStore()
const { fruitsList } = storeToRefs(useFruitsStore());

const saveNutritionValue = (event: Event) => {
	const target = event.target as HTMLInputElement;
	updateFilterNutrition(target?.value);
}
const saveStartFilter = (event: Event) => {
	const target = event.target as HTMLInputElement;
	updateStartFilter(Number(target?.value));
}
const saveEndFilter = (event: Event) => {
	const target = event.target as HTMLInputElement;
	updateEndFilter(Number(target?.value));
}

onMounted(async () => {
	if (fruitsList.value?.length) return;
	await getFruitsData();
})

</script>

<template>

	<div class="header-container">
		<h2 class="main-label">Fruit explorer</h2>

		<div class="filter-select nutrition">
			<p>Select nutrition:</p>
			<select class="filter-list" @change="saveNutritionValue">
				<option v-for="filter in filterNutritionList" :key="filter.name" :value="filter.value" > {{ filter.name }}</option>
			</select>
		</div>

		<div class="filter-select start">
			<p>Select start value:</p>
			<input type="number" class="filter-list" @input="saveStartFilter" />

		</div>
		<div class="filter-select end">
			<p>Select end value:</p>
			<input type="number" class="filter-list" @input="saveEndFilter" />
		</div>

		<button @click.stop="resetAllFilters" class="button-reset">Reset filters</button>

		<NuxtLink class="link favorite" to="/favorite">Favorite</NuxtLink>
		<NuxtLink class="link home" to="/">Home</NuxtLink>

	</div>

	<FruitsList :fruits-list="fruitsList" />
</template>

<style>

.filter-list {
	width: 80%;
	padding: 4px 6px;
}

.button-reset {
	width: fit-content;
	padding: 6px 8px;
	border: none;
	border-radius: 4px;
	background-color: #b67fe8;
	cursor: pointer;
	color: white;
	transition: color 0.3s ease-in-out 0s, background-color 0.3s ease-in-out 0s;
	&:hover {
		background-color: #b678ef;
		color: antiquewhite;
	}
}

.filter-select {
	&.nutrition {
		grid-column: 4/5;
		grid-row: 1/2;
	}
	&.start {
		grid-column: 5/6;
		grid-row: 1/2;
	}
	&.end {
		grid-column: 6/7;
		grid-row: 1/2;
	}
}
.header-container {
	grid-area: header;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	align-items: self-end;
	margin-bottom: 2rem;
}

.main-label {
	grid-column: 1/4;
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
		grid-column: 11/12;
		grid-row: 1/2;
	}
	&.home {
		grid-column: 12/13;
		grid-row: 1/2;
	}
	&:hover {
		color: darkviolet;
		text-decoration: underline;
	}
}

</style>
