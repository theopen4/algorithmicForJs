const todo =  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
const todoReponse = await todo.json();
console.log(todoReponse);

function generatePage(todoList){
    const sectionData = document.querySelector('header')
    for(let i = 0; i < todoList.length; i++){
        const todoList = todoReponse[i]
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = todoList.id
        const label = document.createElement('label');
        label.for = todoList.id 
        label.innerText = todoList.title
        sectionData.appendChild(input);
        sectionData.appendChild(label);
        
        
        
        
    }


}

generatePage(todoReponse);
 


