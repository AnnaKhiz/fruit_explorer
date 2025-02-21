import type { Nutritions } from "~/types/Nutritions";

export type Fruits = {
	name: string;
	id: number;
	family: string;
	order: string;
	genus: string;
	favorite: boolean;
	nutritions: Nutritions
}
