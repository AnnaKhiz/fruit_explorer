<script setup lang="ts">
import type { Fruits } from '~/types/Fruits.ts';
import DeleteIcon from '~/assets/icons/delete.svg';
import FavoritesIcon from '~/assets/icons/favorite.svg';
import { useFruitsStore } from "~/store/useFruitsStore";
import { useFamilyStore } from "~/store/useFamilyStore";
const { toggleFamilyState, removeFamilyItem } = useFamilyStore()
const route = useRoute()

const props = defineProps<{
	fruit: Fruits;
}>();


const { removeFruitItem, toggleFavoriteState } = useFruitsStore();
const handleFavorite = (value: Fruits) => {
	updateLocalStorage(value);
	toggleFavoriteState(value.id);
}

const handleFamily = (value: Fruits) => {
	updateLocalStorage(value);
	toggleFamilyState(value.id);
}

const updateLocalStorage = (value: Fruits) => {
	const storageFav = JSON.parse(localStorage.getItem('fruits_fav') || 'null');

	switch(true) {
		case storageFav && !value.favorite: {
			storageFav.push({...value, favorite: true});

			localStorage.setItem('fruits_fav', JSON.stringify(storageFav))
		}
			break;
		case !storageFav: {
			localStorage.setItem('fruits_fav', JSON.stringify([{ ...value, favorite: true}]))
		}
			break;
		default: {
			const index = storageFav.findIndex((el: Fruits) => el.id === value.id);
			if (index === -1) return;
			storageFav.splice(index, 1);
			localStorage.setItem('fruits_fav', JSON.stringify(storageFav))
		}
	}

}

const handleDelete = (id: number) => {
	route.name === 'group-id' ? removeFamilyItem(id) : removeFruitItem(id);
}

const toggleFavorite = (fruit: Fruits) => {
	route.name === 'group-id' ? handleFamily(fruit) : handleFavorite(fruit)
}


</script>

<template>
	<div class="item-container">
		<div class="item-content mb-1">
			<h3>{{ props.fruit.name }}</h3>
			<NuxtLink class="link" :to="`/group/${fruit.family}`">Family: {{ props.fruit.family }}</NuxtLink>
		</div>

		<div class="item-content">

			<div class="fruit">
				<h4>Nutrition:</h4>
				<p class="nutrition-item"> Calories: <span class="font-bold"> {{ props.fruit.nutritions?.calories }} </span> </p>
				<p class="nutrition-item"> Fat: <span class="font-bold"> {{ props.fruit.nutritions?.fat }}</span>  </p>
				<p class="nutrition-item"> Sugar: <span class="font-bold">{{ props.fruit.nutritions?.sugar }} </span>  </p>
				<p class="nutrition-item">Carbohydrates: <span class="font-bold">{{ props.fruit.nutritions?.carbohydrates }}</span>  </p>
				<p class="nutrition-item"> Protein: <span class="font-bold">{{ props.fruit.nutritions?.protein }}</span>  </p>
			</div>

			<div class="fruit">
				<DeleteIcon class="action-icon" @click="handleDelete(props.fruit.id)" />
				<FavoritesIcon class="action-icon fav" @click="toggleFavorite(fruit)" :class="props.fruit.favorite ? 'active' : ''" />
			</div>
		</div>

	</div>
</template>

<style scoped>
.nutrition-item {
	margin-bottom: 0;
}
.font-bold {
	font-weight: 600;
}
.item-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	height: 100%;
	padding: 0.75rem;
	border: 1px solid #7268ab;
	border-radius: 0.9rem;
	box-shadow: 2px 2px 10px rgba(138, 43, 226, 0.49);

}
.item-content {
	display: flex;
	justify-content: space-between;
	align-items: self-end;
	width: 100%;
	flex-grow: 1;
	gap: 0.3rem;

}
.mb-1 {
	margin-bottom: 1rem;
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
	gap: 0.2rem;
	& > h4 {
		margin-bottom: 0.5rem;
		text-decoration: underline;
	}
}


</style>
