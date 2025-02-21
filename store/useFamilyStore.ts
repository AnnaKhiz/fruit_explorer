import type { Fruits } from "~/types/Fruits";
import { useFruitsStore } from "~/store/useFruitsStore";

export const useFamilyStore = defineStore('familyStore', () => {
	const { fruitsList } = storeToRefs(useFruitsStore());
	const familyList = ref<Fruits[] | null>(null);
	const familyName = ref<string>('');
	async function getFamilyData(family: string) {
		try {
			const result = await $fetch<Fruits[]>(`https://www.fruityvice.com/api/fruit/family/${family.toLowerCase()}`);
			const storageFav = JSON.parse(localStorage.getItem('fruits_fav') || 'null');
			const arrayIds = storageFav.map((el: Fruits) => el.id);

			familyList.value = result.map((el: Fruits) =>  ({
				...el,
				favorite: arrayIds.includes(el.id),
			}));

			familyName.value = family;
		} catch (error) {
			console.log('Error in fetching fruits list', error)
		}
	}

	function toggleFamilyState(id: number) {
		const index = familyList.value?.findIndex(el => el.id === id) as number;
		if (index === -1) return;

		if (familyList.value) {
			familyList.value[index].favorite = !familyList.value[index].favorite;
		}

		if (fruitsList.value) {
		 const indexFruit = fruitsList.value?.findIndex(el => el.id === id) as number;

		 if (indexFruit === -1) return;
		 fruitsList.value[indexFruit].favorite = !fruitsList.value[indexFruit].favorite;
		}
	}

	const removeFamilyItem = (id: number) => {
		const index = familyList.value?.findIndex(el => el.id === id) as number;
		if (index === -1) return;

		const storageFav = JSON.parse(localStorage.getItem('fruits_fav') || 'null');
		if (!storageFav) return;

		storageFav.splice(index, 1);
		familyList.value?.splice(index, 1);

		if (fruitsList.value) {
			const indexFruit = fruitsList.value?.findIndex(el => el.id === id) as number;

			if (indexFruit === -1) return;
			fruitsList.value.splice(indexFruit, 1);

			localStorage.setItem('fruits_fav', JSON.stringify(storageFav));
		}
	}

	return {
		familyList,
		familyName,
		getFamilyData,
		toggleFamilyState,
		removeFamilyItem
	}
})
