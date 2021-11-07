const addForm = document.querySelector('.add');

const ul = document.querySelector('.todos');

const search = document.querySelector('.search input');

const generateTodo = todo =>{
  var html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  ul.innerHTML += html;
};

//Adding TODO

addForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  var todo = addForm.add.value.trim();
  if(todo.length){
    generateTodo(todo);
    addForm.reset();
  }
});

//Delete TODO

ul.addEventListener('click', e=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  };
});

//Search TODO

const filterTodos = (term)=>{
  Array.from(ul.children)
  .filter((todo)=> !todo.textContent.includes(term))
  .forEach((todo)=>todo.classList.add('filtered'))

  Array.from(ul.children)
  .filter((todo)=> todo.textContent.toLowerCase().includes(term))
  .forEach((todo)=>todo.classList.toLowerCase().remove('filtered'))
};

search.addEventListener('keyup',()=>{
  const term = search.value.trim().toLocaleLowerCase();
  filterTodos(term);
})
