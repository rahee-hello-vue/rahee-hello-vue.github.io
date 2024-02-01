<script setup>
import { reactive, computed , ref }  from 'vue'

const author = ref({
	name : 'judy',
	books: [1,2,3]
});

</script>

<template>
	<p>has published books:</p>
	<p> {{ author.books.length > 2 ? 'yes' : 'no' }} </p>
</template>

<style scoped>
</style>


