<script setup lang="ts">
import FruitItem from "~/components/home/FruitItem.vue";
import type { Fruits } from "~/types/Fruit";

const props = defineProps<{
	fruitsList: Fruits[]
}>()

</script>

<template>
	<div v-if="props.fruitsList?.length"  class="grid-container" >
		<FruitItem v-for="fruit in props.fruitsList" :key="fruit.id" :fruit="fruit" class="grid-item" />
	</div>
	<div v-else>No favorite yet</div>
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
