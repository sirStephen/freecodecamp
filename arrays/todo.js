let todos = [{
	text: 'Pray to God in the morning',
	completed: true
}, {
	text: 'Brush my teeth after that',
	completed: true
}, {
	text: 'Do early mo mo exercise',
	completed: false
}, {
	text: 'Take breakfast',
	completed: false
}, {
	text: 'Dress up for work',
	completed: true
}, {
	text: 'Call girlfriend before leaving for work',
	completed: true
}, {
	text: 'Leave home for work',
	completed: true
}];

const sortTodos = () => {
	todos.sort((a, b) => {
		if (a.completed < b.completed) {
			return -1
		} else {
			return 1
		}
	})
}

// const sortTodos = () => {
// 	todos.sort((a, b) => {
// 		if (!a.completed && b.completed) {
// 			return -1
// 		} else if (!b.completed && a.completed) {
// 			return 1
// 		} else {
// 			return 0
// 		}
// 	})
// }

sortTodos(todos);
console.log(todos);

// const deleteTodo = (todos, todoText) => {
// 	const index = todos.findIndex((todo) => {
// 		return todo.text.toLowerCase() === todoText.toLowerCase()
// 	})

// 	if (index > -1) {
// 		todos.splice(index, 1);
// 	}
// }

// const getThingsToDo = todos.filter((todo, testing) => {
// 	const isTextMatch = todo.text.toLowerCase().includes(testing.toLowerCase())
// 	const isCompletedMatch = todo.completed.toLowerCase().includes(testing.toLowerCase())
// 	return isTextMatch || isCompletedMatch
// })

const getThingsToDo = (todos) => {
	return todos.filter((todo) => {
		return !todo.completed
	})
}

console.log(getThingsToDo(todos));

// deleteTodo(todos, 'leave Home for work');
// console.log(todos);

