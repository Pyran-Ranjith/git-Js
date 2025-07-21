//------------------------------------------------------
const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todoList.push(name);
  // console.log(todoList);

  inputElement.value = "";
  /* Loops */

/*
let i = 1;
      while (i < 5) {
        console.log(i);
        i ++;
      }

      for (let i = 1; i <= 5; i++) {
        console.log(i);
      }

*/

  //----------Looping through an array-------------------
  /*
  const todolist = ["make dinner", "wash dishes", "wach youtube"];

  for (let i = 0; i < todolist.length; i++) {
    const value = todolist[i];
    console.log(value);
  }
*/



}
