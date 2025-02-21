type Nutritions = {
	calories: number;
	fat: number;
	sugar: number;
	carbohydrates: number;
	protein: number;
}

export type Fruits = {
	name: string;
	id: number;
	family: string;
	order: string;
	genus: string;
	favorite: boolean;
	nutritions: Nutritions
}
