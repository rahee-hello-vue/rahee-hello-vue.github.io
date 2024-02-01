<script setup>
import { ref } from 'vue' 

const message = ref('')
</script>

<template>

	<span> multiline message is : </span>
	<p> {{  message }} </p>
	<textarea v-model="message" placeholder="기입해주세요"></textarea>
	

</template>

<style scoped>
</style>


