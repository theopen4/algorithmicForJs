const todo =  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
const todoReponse = await todo.json()

console.log(todoReponse)



