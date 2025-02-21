<script setup lang="ts">
import type { Fruits } from '~/types/Fruit.ts';
import DeleteIcon from '~/assets/icons/delete.svg';
import FavoritesIcon from '~/assets/icons/favorite.svg';
import OpenIcon from '~/assets/icons/show.svg';
import { useFruitsStore } from "~/store/useFruitsStore";

const router = useRouter()

const props = defineProps<{
	fruit: Fruits;
}>();

type FruitsFavorite = (Fruits & { favorite: boolean });

const { removeFruitItem, toggleFavoriteState } = useFruitsStore();
const handleFavorite = (value: Fruits) => {

	const storageFav = JSON.parse(localStorage.getItem('fruits_fav') || 'null');
	let updatedValue: FruitsFavorite[] | FruitsFavorite = [];

	if (!storageFav) {
		updatedValue = [{ ...value, favorite: true}];

		localStorage.setItem('fruits_fav', JSON.stringify(updatedValue))

	} else if (storageFav && !value.favorite) {
		updatedValue = { ...value, favorite: true};
		storageFav.push(updatedValue);

		localStorage.setItem('fruits_fav', JSON.stringify(storageFav))
	} else {
		const index = storageFav.findIndex((el: Fruits) => el.id === value.id);
		if (index === -1) return;
		storageFav.splice(index, 1);

		localStorage.setItem('fruits_fav', JSON.stringify(storageFav))
	}

	toggleFavoriteState(value.id)
}
const handleDelete = (id: number) => {


	console.log('deleted', router.currentRoute.value.path !== '/')
	removeFruitItem(id)
}

onMounted(() => {
	console.log('FRUIT - ', props.fruit)
})

</script>

<template>
	<div >
		<div class="fruit">
			<h3>{{ props.fruit.name }}</h3>
			<NuxtLink :to="`/group/${fruit.family}`">Family: {{ props.fruit.family }}</NuxtLink>
			<p>Order: {{ props.fruit.order }}</p>
			<p>Genus: {{ props.fruit.genus }}</p>
		</div>

		<div class="fruit">
			<h4>Nutrition:</h4>
			<p> Calories: {{ props.fruit.nutritions?.calories }}</p>
			<p> Fat: {{ props.fruit.nutritions?.fat }}</p>
			<p> Sugar: {{ props.fruit.nutritions?.sugar }}</p>
			<p> Carbohydrates: {{ props.fruit.nutritions?.carbohydrates }}</p>
			<p> Protein: {{ props.fruit.nutritions?.protein }}</p>
		</div>

		<div class="fruit">
			<DeleteIcon class="action-icon" @click="handleDelete(props.fruit.id)" />
			<FavoritesIcon class="action-icon fav" @click="handleFavorite(fruit)" :class="props.fruit.favorite ? 'active' : ''" />
			<OpenIcon class="action-icon" />
		</div>
	</div>
</template>

<style scoped>


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
