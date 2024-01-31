<script setup>
import { ref } from 'vue'
import category from '@/assets/category.json'

const parentMessage = ref('Parent')
const items = ref([
    { message: 'Foo' },
    { message: 'Bar' }
])
const categories = ref(category)
</script>

<template>
<li v-for="(category, index) in categories" :key="index">
    {{ category.name }} - {{ category.code }}
</li>
</template>

