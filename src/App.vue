<script setup>
import { ref } from 'vue'
import mainMovie from '@/assets/movie.json'

const movie  = ref(mainMovie.movies)
</script>

<template>
<ul>
	<li v-for="(mv, index) in movie" :key="index">
		 <p class="title"> 영화제목 [ {{ mv.title_kor }} ] </p>
		<p><img :src="mv.poster_url" /></p>
		<p>{{ mv.genre }}</p>
		<p>{{ mv.summary }}</p> 
	</li>
	
</ul>
</template>
<style scoped>
li {margin: 30px 0}
.title { font-size: 18px; margin-bottom: 20px; font-weight: bold}
li p:last-child{margin-top:15px;}
</style>
