const todo =  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
const todoReponse = await todo.json();

function generatePage(todoList){
    const sectionData = document.querySelector('main')
    for(let i = 0; i < todoList.length; i++){
        const todoList = todoReponse[i]
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = todoList.id
        const label = document.createElement('label');
        label.for = todoList.id 
        sectionData.appendChild(input);
    }

}
 


