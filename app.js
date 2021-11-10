const addForm = document.querySelector('.add');
const formSubmit = document.querySelector('.form-submit');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');
// const todo = localStorage.getItem('todo');
const todoDef = ['Welcome'];
if(!localStorage.getItem('todo')){
   localStorage.setItem('todo',JSON.stringify(['Welcome']));
}
const todoArray = JSON.parse(localStorage.getItem('todo'));

const generateTodo = () =>{
  ul.innerHTML = '';
  todoArray.forEach(todo => {
    var html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                  <span>${todo}</span>
                  <i class="far fa-trash-alt delete"></i>
                </li>`;
    ul.innerHTML += html;
  })
};

//Adding TODO

formSubmit.addEventListener('click',(e)=>{
  e.preventDefault();
  var todo = addForm.add.value.trim();
  console.log(todo);
  if(todo.length){
    // generateTodo(todo);
    todoArray.push(todo);
    generateTodo();
    addForm.reset();
    localStorage.setItem('todo',JSON.stringify(todoArray));
    //console.log(todoArray);
  };
});

//Delete TODO

ul.addEventListener('click', e=>{
  if(e.target.classList.contains('delete')){
    // e.target.parentElement.remove();
    const itemName = e.target.parentElement.textContent.trim();
    const itemIndex = todoArray.indexOf(itemName);
    // console.log(itemName);
    // console.log(itemIndex);
    todoArray.splice(itemIndex,1);
    localStorage.setItem('todo',JSON.stringify(todoArray));
    generateTodo();
  };
});

//Search TODO

const filterTodos = (term)=>{
  Array.from(ul.children)
  .filter((todo)=> !todo.textContent.includes(term))
  .forEach((todo)=>todo.classList.add('filtered'))

  Array.from(ul.children)
  .filter((todo)=> todo.textContent.toLowerCase().includes(term))
  .forEach((todo)=>todo.classList.remove('filtered'))
};

search.addEventListener('keyup',()=>{
  const term = search.value.trim().toLocaleLowerCase();
  filterTodos(term);
})


//Intiating TODO
generateTodo();
