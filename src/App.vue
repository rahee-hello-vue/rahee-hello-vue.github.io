<script setup>
import { ref } from 'vue'
const awesome = ref(true)


function toggleAwesome(v){
  awesome.value = !v
}


function isAwesome(){
  return awesome.value
}

</script>

<template>
	<button @click="toggleAwesome(v)">toggle</button>
	<br/>
	<h1 v-if="isAwesome()">Vue is awesome!</h1>
	<h1 v-else>No</h1>

	<h2 v-if="isAwesome">gg</h2>
	<h4 v-show="isAwesome()">wow</h4>
</template>

