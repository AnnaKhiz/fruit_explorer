import type { Filter } from '~/types/Filter';

export const useFilterStore = defineStore('filterStore', () => {
	const selectedNutritionValue = ref<string>('calories');
	const startFilter = ref<number>(0);
	const endFilter = ref<number>(0);

	const filterNutritionList = ref<Filter[]>([
		{
			name: 'Calories',
			value: 'calories'
		},
		{
			name: 'Fat',
			value: 'fat'
		},
		{
			name: 'Sugar',
			value: 'sugar'
		},
		{
			name: 'Carbohydrates',
			value: 'carbohydrates'
		},
		{
			name: 'Protein',
			value: 'protein'
		},
	]);

	function updateFilterNutrition(value: string) {
		selectedNutritionValue.value = value;
	}

	function updateStartFilter(value: number) {
		startFilter.value = value;
	}
	function updateEndFilter(value: number) {
		endFilter.value = value;
	}

	function resetAllFilters() {
		endFilter.value = 0;
		startFilter.value = 0;
		selectedNutritionValue.value = 'calories';
	}

	return {
		filterNutritionList,
		selectedNutritionValue,
		startFilter,
		endFilter,
		updateFilterNutrition,
		updateStartFilter,
		updateEndFilter,
		resetAllFilters
	}

})
