import type { Fruits } from "~/types/Fruits";

export const useFruitsStore = defineStore('fruitsStore', () => {
	const fruitsList = ref<Fruits[] | null>(null);

	async function getFruitsData() {
		try {
			const result = await $fetch<Fruits[]>('https://www.fruityvice.com/api/fruit/all');
			fruitsList.value = result.map((el: Fruits) => ({...el, favorite: false}) as Fruits);
		} catch (error) {
			console.log('Error in fetching fruits list', error)
		}
	}

	function removeFruitItem(id: number) {
		const index = fruitsList.value?.findIndex(el => el.id === id) as number;
		if (index === -1) return;

		const storageFav = JSON.parse(localStorage.getItem('fruits_fav') || 'null');

		if (!storageFav) return;

		storageFav.splice(index, 1);

		localStorage.setItem('fruits_fav', JSON.stringify(storageFav))

		return fruitsList.value?.splice(index, 1);
	}

	function toggleFavoriteState(id: number) {
		const index = fruitsList.value?.findIndex(el => el.id === id) as number;
		if (index === -1) return;

		if (fruitsList.value) {
			fruitsList.value[index].favorite = !fruitsList.value[index].favorite;
		}
	}

	function updateFruitsList(value: Fruits) {
		const index = fruitsList.value?.findIndex(el => el.id === value.id) as number;
		if (index === -1) return;

		if (fruitsList.value) {
			fruitsList.value[index] = value;
		}
	}

	return {
		fruitsList,
		getFruitsData,
		removeFruitItem,
		toggleFavoriteState
	}
})
