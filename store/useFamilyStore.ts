import type { Fruits } from "~/types/Fruit";

export const useFamilyStore = defineStore('familyStore', () => {

	const familyList = ref<Fruits[] | null>(null);
	const familyName = ref<string>('');
	async function getFamilyData(family: string) {
		try {
			const result = await $fetch<Fruits[]>(`https://www.fruityvice.com/api/fruit/family/${family.toLowerCase()}`);

			const storageFav = JSON.parse(localStorage.getItem('fruits_fav') || 'null');

			const arrayIds = storageFav.map((el: Fruits) => el.id);
			console.log(arrayIds)


			familyList.value = result.map((el: Fruits) =>  ({
				...el,
				favorite: arrayIds.includes(el.id),
			}));

			familyName.value = family;
		} catch (error) {
			console.log('Error in fetching fruits list', error)
		}
	}


	return { familyList, familyName, getFamilyData }
})
