<script setup lang="ts">
import type { Fruits } from '~/types/Fruit.ts';
import FruitsList from "~/components/home/FruitsList.vue";


const { data } = await useFetch<Fruits[]>('https://www.fruityvice.com/api/fruit/all');
console.log('data', data)


onMounted(async () => {

})
</script>

<template>
	<h2 class="main-label">Fruit explorer</h2>
	<FruitsList :fruits="data"/>
<!--	<div class="grid-container">-->
<!--		<div v-if="data?.length" class="grid-item" v-for="fruit in data" :key="fruit.id">-->
<!--			<div class="fruit">-->
<!--				<h3>{{ fruit.name }}</h3>-->
<!--				<p>Family: {{ fruit.family }}</p>-->
<!--				<p>Order: {{ fruit.order }}</p>-->
<!--				<p>Genus: {{ fruit.genus }}</p>-->
<!--			</div>-->

<!--			<div class="fruit">-->
<!--				<h4>Nutrition:</h4>-->
<!--				<p> Calories: {{ fruit.nutritions?.calories }}</p>-->
<!--				<p> Fat: {{ fruit.nutritions?.fat }}</p>-->
<!--				<p> Sugar: {{ fruit.nutritions?.sugar }}</p>-->
<!--				<p> Carbohydrates: {{ fruit.nutritions?.carbohydrates }}</p>-->
<!--				<p> Protein: {{ fruit.nutritions?.protein }}</p>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
</template>

<style scoped>


.main-label {
	margin-bottom: 2rem;
	font-size: 1.5rem;
	color: darkslateblue;

}


</style>
