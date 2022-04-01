function getItem(item){
  return document.querySelector(item);
}


function addToDo(todoText){
  const div = document.createElement("div");
    div.classList.add("form-check");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("form-check-input");

    const label = document.createElement("label");
    label.classList.add("form-check-label");

    const textItem = document.createTextNode(todoText);
    
    label.appendChild(textItem);
    div.appendChild(input);
    div.appendChild(label);


    const listItem = document.createElement("li");
    listItem.appendChild(div);
    listItem.classList.add("list-group-item");

    const todoList = getItem("#todo-list");
    todoList.appendChild(listItem);
}

const inputToDo = getItem("#input-todo");

inputToDo.addEventListener("keydown", (evento) => {
  if(evento.code == "Enter"){
    console.log("Enter pressionado");
    const inputValue = inputToDo.value;
    addToDo(inputValue);
    inputToDo.value = "";
  }
});

const btnAddToDo = getItem("#btn-add-todo");
btnAddToDo.addEventListener("click", (evento) => {
  
  const inputValue = inputToDo.value;

  console.log(inputValue);
  if(inputValue == ""){
    console.log("String vazia");
  }else{
    addToDo(inputValue);    
    inputToDo = "";
  }

});