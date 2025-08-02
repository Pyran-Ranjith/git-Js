//------------------------------------------------------
const todoList = ["make dinner", "wsh dishes"];
let todoListHTML = '';

for (let i = 0; i <= todolist.length; i++) {
    const todo = todolist[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;

    // document.querySelector(js-todo-list)
    // .innerHTML = todoListHTML;
}
    console.log(todoListHTML);

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";

  //------------------------------------------------------
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

  //----------Calculate Total of an array-------------------
  /*
const nums = [1, 1, 3];
let total = 0;
for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total);
*/
  //----------Number doubled of an array-------------------
  /*
const numsDoubled = [];
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  numsDoubled.push(num * 2);
}
console.log(numsDoubled);
*/
}
