<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1,2,3])


function listToggle(){
	 document.querySelector('.text').innerHTML = ''
	show.value = !show.value;
}

function listAdd(){
	const num = list.value.length + 1; 
	const addItem = list.value.push(num);
	 document.querySelector('.text').innerHTML= `${addItem}가 추가 되었습니다`

}

function listRemove(){
	if ( list.value.length > 0 ) {
	const removeItem = list.value.pop();
		 document.querySelector('.text').innerHTML = `${removeItem}가 제거되었습니다`	
	} else { 
		alert('더 이상 삭제할 수 없습니다')
	}
}	

function listReverse(){
	const reverse = list.value.reverse();
	 document.querySelector('.text').innerHTML  = reverse.value.join(', ');
}


</script>

<template>
	<button @click="listToggle">List랜더링on/off</button>
	<button @click="listAdd">List 추가 </button>
	<button @click="listRemove">List 제거 </button>
	<button @click="listReverse">List 뒤집기 </button>

	<p class="text"></p>

	<ul v-if="show">
		<li v-for="item of list">{{ item }} </li>
	</ul>

	<p v-else-if="list.length">list is not empty, but hidden</p>
	<p v-else>list is empty</p>
</template>

<style scoped>
</style>
