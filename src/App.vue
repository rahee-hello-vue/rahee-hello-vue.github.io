<script setup>
import { ref } from 'vue'

let id = 0
const newTodo = ref('')
const todos = ref([
	{ 
		id: id++, 
		issue: 'backlog'
	},
	{ 
		id: id++, 
		issue: 'Todo'
	},
	{
		id: id++,
		issue: 'Going Hawaii'
	}
])


function addTodo(e){
	e.preventDefault();

	// todos 에 넣기 
	todos.value.push({
		id: id++,
		issue: newTodo.value
	});
	
	//입력창 초기화
	newTodo.value = '';
}

function removeTodo(todo){
	 // todoList 배열에서 해당하는 todo를 제외한 새 배열을 생성하여 todos 변수에 다시 할당
	todos.value = todos.value.filter(item => item !== todo);
}

//const removeTodo = (todo) => {
//   todos.value = todos.value.filter(item => item.id !== todo.id)
//}

</script>

<template>
	<form @submit="addTodo">
		<input v-model="newTodo">
		<button type="submit">ADD</button>
	</form>
	<ul>
		<li v-for="todo in todos">
			{{ todo.issue }} - <button @click="removeTodo(todo)">x</button>	
		</li>
	</ul>
</template>

<style scoped>
</style>
