import type { Fruits } from "~/types/Fruit";

export const useFruitsStore = defineStore('fruitsStore', () => {
	const fruitsList = ref<Fruits[] | null>(null);

	async function getFruitsData() {
		try {
			fruitsList.value = await $fetch<Fruits[]>('https://www.fruityvice.com/api/fruit/all');
		} catch (error) {
			console.log('Error in fetching fruits list', error)
		}
	}

	function removeFruitItem(id: number) {
		const index = fruitsList.value?.findIndex(el => el.id === id) as number;
		console.log('index', index)
		if (index === -1) return;

		return fruitsList.value?.splice(index, 1);
	}

	return { fruitsList, getFruitsData, removeFruitItem }
})
