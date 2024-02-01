<script setup>
import { reactive, computed , ref }  from 'vue'

const author = ref({
	name : 'judy',
	books: [1,2,3]
});


// a computed ref
const bookmessage = computed( () => {
	return author.value.books.length > 2 ? 'yes' : 'no'
});

</script>

<template>
	<p>has published books:</p>
	<p> {{ bookmessage }} </p>
</template>

<style scoped>
</style>


