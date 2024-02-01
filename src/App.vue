<script setup>
function say(mesg){
	alert(mesg)
}


</script>

<template>
	<button @click="say('hello')">say hello</button>
	<button @click="say('bye')">say bye</button>
</template>

<style scoped>
</style>


