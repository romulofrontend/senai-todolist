const btnAddToDo = document.querySelector("#btn-add-todo");

btnAddToDo.addEventListener("click", (evento) => {
  const inputToDo = document.querySelector("#input-todo");
  const inputValue = inputToDo.value;
  console.log(inputValue);
});
