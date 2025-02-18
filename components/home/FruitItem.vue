<script setup lang="ts">
import type { Fruits } from '~/types/Fruit.ts';
import DeleteIcon from '~/assets/icons/delete.svg';
import FavoritesIcon from '~/assets/icons/favorite.svg';
import OpenIcon from '~/assets/icons/show.svg';

const props = defineProps<{
	fruit: Fruits;
}>();

const isFavorite = ref<boolean>(false);

const handleFavorite = () => {
	isFavorite.value = !isFavorite.value;
}
</script>

<template>
	<div class="grid-item" >
		<div class="fruit">
			<h3>{{ fruit.name }}</h3>
			<p>Family: {{ fruit.family }}</p>
			<p>Order: {{ fruit.order }}</p>
			<p>Genus: {{ fruit.genus }}</p>
		</div>

		<div class="fruit">
			<h4>Nutrition:</h4>
			<p> Calories: {{ fruit.nutritions?.calories }}</p>
			<p> Fat: {{ fruit.nutritions?.fat }}</p>
			<p> Sugar: {{ fruit.nutritions?.sugar }}</p>
			<p> Carbohydrates: {{ fruit.nutritions?.carbohydrates }}</p>
			<p> Protein: {{ fruit.nutritions?.protein }}</p>
		</div>

		<div class="fruit">
			<DeleteIcon class="action-icon" />
			<FavoritesIcon class="action-icon fav" @click="handleFavorite" :class="isFavorite ? 'active' : ''" />
			<OpenIcon class="action-icon" />
		</div>
	</div>
</template>

<style scoped>
.grid-item {
	display: flex;
	justify-content: space-between;
	align-items: self-start;
	gap: 1rem;
	padding: 0.75rem;
	border: 1px solid darkslateblue;
	border-radius: 0.9rem;
	box-shadow: 2px 2px 5px blueviolet;
}

.action-icon {
	padding: 0.3rem;
	border: 1px solid gray;
	border-radius: 4px;
	width: 32px;
	height: 32px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out 0s;
	color: transparent;

	&.active {
		color: red;
	}
	&:hover {
		background-color: rgba(128, 128, 128, 0.38);
	}
}

.fruit {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: self-start;
	gap: 0.5rem;
}


</style>
