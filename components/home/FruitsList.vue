<script setup lang="ts">
import FruitItem from "~/components/home/FruitItem.vue";
import type { Fruits } from '~/types/Fruit.ts';

const props = defineProps<{
	fruits: Fruits[];
}>();

</script>

<template>
	<div class="grid-container">
		<div v-if="props.fruits?.length" v-for="fruit in props.fruits" :key="fruit.id">
			<FruitItem :fruit="fruit" />
		</div>
	</div>
</template>

<style scoped>
.grid-container {
	display: grid;
	grid-template-columns: repeat(4, 24%);
	gap: 1rem;
}


</style>
