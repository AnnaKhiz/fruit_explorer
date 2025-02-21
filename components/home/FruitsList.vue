<script setup lang="ts">
import FruitItem from "~/components/home/FruitItem.vue";
import type { Fruits } from "~/types/Fruits";
import type {Nutritions } from "~/types/Nutritions";
import { useFilterStore } from "~/store/useFilterStore";
const { selectedNutritionValue, endFilter, startFilter } = storeToRefs(useFilterStore());

const props = defineProps<{
	fruitsList: Fruits[]
}>()

const filteredList = computed(() => {
	if (!selectedNutritionValue) return props.fruitsList;

	switch(true) {
		case startFilter.value !== 0 && endFilter.value !== 0: {
			return props.fruitsList.filter((el: Fruits) => el.nutritions[selectedNutritionValue.value as keyof Nutritions] <= endFilter.value && el.nutritions[selectedNutritionValue.value as keyof Nutritions] >= startFilter.value );
		}
		case startFilter.value === 0 && endFilter.value !== 0: {
			return props.fruitsList.filter((el: Fruits) => el.nutritions[selectedNutritionValue.value as keyof Nutritions] <= endFilter.value);
		}
		case startFilter.value !== 0 && endFilter.value === 0: {
			return props.fruitsList.filter((el: Fruits) => el.nutritions[selectedNutritionValue.value as keyof Nutritions] >= startFilter.value );
		}
		default:
			return props.fruitsList;
	}
})


</script>

<template>
	<div v-if="filteredList?.length"  class="grid-container" >
		<FruitItem v-for="fruit in filteredList" :key="fruit.id" :fruit="fruit" class="grid-item" />
	</div>
	<div v-else>No items found</div>
</template>

<style scoped>
.grid-container {
	grid-area: main;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-column: span 12;
	align-items: stretch;
	gap: 1rem;
}

.grid-item {
	grid-column: span 3;
}
</style>
