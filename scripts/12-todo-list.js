const todoList = JSON.parse(localStorage.getItem('todoList'))||[];

renderTodoList();



function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject,index) => {
        const{ name , dueDate} = todoObject;

        const html =
    `   <div>${name}</div>
        <div>${dueDate}</div> 
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
         `;
         
        todoListHTML += html;

});

    document.querySelector('.js-todoList')
    .innerHTML = todoListHTML;

    //The below code works as an array
    //so we have to use .forEach to loop through 
    //each button

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            todoList.splice(index,1);
            renderTodoList();
        });
    });

}

document.querySelector('.js-add-todo-button')
.addEventListener('click',()=>{
    addTodo();
});


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value ;
    //console.log(name);

    const dateInputElement = document.querySelector('.js-dueDate-input');
    const dueDate = dateInputElement.value;

    todoList.push({
       // name: name,
        //dueDate: dueDate
        name,
        dueDate
    });
    //console.log(todoList);
    dateInputElement.value = '';
    inputElement.value = '';

    renderTodoList();
    //whenever we update the todo list, save it in localStorage.
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}