import type { Nutritions } from "~/types/Nutritions";

export type Filter = {
	name: string;
	value: keyof Nutritions;
}

