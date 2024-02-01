<script setup>
import { ref, onMounted, onUpdated, onBeforeUpdate } from 'vue'

const count = ref(0)

// 컴포넌트가 마운트될 때 실행될 로직을 정의합니다.
onMounted(() => {
  console.log('Component is mounted')
})

// 컴포넌트가 업데이트되기 전에 실행될 로직을 정의합니다.
onBeforeUpdate(() => {
  console.log('Component is about to update')
})

// 컴포넌트가 업데이트된 후 실행될 로직을 정의합니다.
onUpdated(() => {
  console.log('Component is updated')
})
</script>

<template>
  <!-- 버튼을 클릭하면 count 값을 증가시키는 이벤트 핸들러를 정의합니다. -->
  <button @click="count++"> {{ count }} </button>
</template>

<!-- scoped 스타일을 정의합니다. -->
<style scoped>
</style>

