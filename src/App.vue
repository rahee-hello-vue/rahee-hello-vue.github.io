<script setup>
import { ref } from 'vue'
import mainMovie from '@/assets/movie.json'

const movies = ref(mainMovie.movies)
</script>

<template>
  <ul>
	<template  v-for="(movie, index) in movies" :key="index">
    <li v-if="movie.genre.includes('드라마')">
      <p class="title"> 영화제목 [ {{ movie.title_kor }} ] </p>
      <p><img :src="movie.poster_url" /></p>
      <p>{{ movie.genre }}</p>
      <p>{{ movie.summary }}</p>
    </li>
	</template>
  </ul>
</template>

<style scoped>
li {
  margin: 30px 0;
}
.title {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
}
li p:not(.title) {
  margin-top: 15px;
}
</style>

