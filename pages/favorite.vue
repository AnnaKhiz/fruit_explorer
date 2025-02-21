<script setup lang="ts">
import FruitsList from "~/components/home/FruitsList.vue";
import { useFruitsStore } from "~/store/useFruitsStore";
const { fruitsList } = storeToRefs(useFruitsStore())

const favList = computed(() => fruitsList.value?.filter(el => el.favorite));
</script>

<template>
	<div class="header-container">
		<h2 class="main-label">Favorite fruits list</h2>
		<NuxtLink class="link favorite" to="/favorite">Favorite</NuxtLink>
		<NuxtLink class="link home" to="/">Home</NuxtLink>
	</div>

	<FruitsList :fruits-list="favList" />
</template>

