function getItem(item){
  return document.querySelector(item);
}

const btnAddToDo = getItem("#btn-add-todo");

btnAddToDo.addEventListener("click", (evento) => {
  const inputToDo = getItem("#input-todo");
  const inputValue = inputToDo.value;
  console.log(inputValue);

  if(inputValue = ""){
    console.log("String vazia");
  }else{
    const todoList = getItem("#todo-list");

    const listItem = document.createElement("li");
    const textItem = document.createTextNode(inputValue);

    listItem.appendChild(textItem);
    listItem.classList.add("list-group-item");

    todoList.appendChild(listItem);
    inputToDo = "";

  }

});
