<script setup lang="ts">
import FruitsList from "~/components/home/FruitsList.vue";
import { useFamilyStore } from "~/store/useFamilyStore";
const { getFamilyData } = useFamilyStore();
const route = useRoute()
const { familyList, familyName } =  storeToRefs(useFamilyStore());

onMounted(async () => {
	await getFamilyData(route.params.id.toString());
})

</script>

<template>
	<div class="header-container">
		<h2 class="main-label">Group - {{ familyName }}</h2>
		<NuxtLink class="link favorite" to="/favorite">Favorite</NuxtLink>
		<NuxtLink class="link home" to="/">Home</NuxtLink>
	</div>

	<FruitsList :fruits-list="familyList" />
</template>

