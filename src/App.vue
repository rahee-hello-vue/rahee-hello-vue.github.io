<script setup>
import { ref, onMounted } from 'vue'

//초기값
const count = ref({
	cnt:0,
	name: "goh"
})

//
function increment(){
	count.value.cnt++
	count.value.name = count.value.name.split('').reverse().join('')
}


// lifecycle
onMounted(() => console.log(`The initial count is ${count.value}`) )

</script>

<template>
	<button @click="increment">count is : {{ count.cnt }}   {{ count.name }}</button>
</template>

<style scoped>
button{
	font-weight: bold;
}
</style>
