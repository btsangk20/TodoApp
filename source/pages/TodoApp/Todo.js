document.getRootNode().addEventListener("load", isNotLogged());

let taskList = [];

function renderUser () {
  getAccountUser();
  let user = listUser[0];
  document.getElementsByClassName("user__full-name")[0].innerHTML += user.fullname;
}

renderUser()
hiddenForSave();

function onClickEditButton() {
  console.log("edit");
  const buttonEditTask = document.getElementsByClassName("edit-button")[0];
  if (buttonEditTask.textContent == "Edit") {
    buttonEditTask.textContent = "Save";
    displayForEdit();
  } else {
    buttonEditTask.textContent = "Edit";
    hiddenForSave();
  }
}

function displayForEdit() {
  let addButton = document.getElementsByClassName("add-button")[0];
  addButton.style.display = "flex";

  let inputContent = document.getElementsByClassName("input-content")[0];
  inputContent.style.display = "flex";

  const controller = document.getElementsByClassName("controller");
  for (var i = 0; i < controller.length; ++i) {
    controller[i].style.visibility = "visible";
  }
}

function hiddenForSave() {
  let addButton = document.getElementsByClassName("add-button")[0];
  addButton.style.display = "none";

  let inputContent = document.getElementsByClassName("input-content")[0];
  inputContent.style.display = "none";

  const controller = document.getElementsByClassName("controller");
  for (var i = 0; i < controller.length; ++i) {
    controller[i].style.visibility = "hidden";
  }
}

function updateTask(index) {
  let taskUpdate = document.getElementsByClassName("update-content")[index];

  if (!taskUpdate.value) {
    alert("Please enter a task name");
    return false;
  }

  let tasks = [];
  tasks.push({
    name: taskUpdate.value,
  });

  taskList.forEach((task, i) => {
    if (i === index) {
      task.name = tasks[0].name;
    }
  });

  renderTask();
  taskUpdate.value = "";

  alert("Successfully updated");
  return true;
}

function addNewTask() {
  let taskNameElement = document.getElementsByClassName("input-content")[0];
  if (!taskNameElement.value) {
    alert("Please enter a task name");
    return false;
  }
  let tasks = [];
  tasks.push({
    name: taskNameElement.value,
  });
  taskList = [...taskList, ...tasks];

  renderTask();

  taskNameElement.value = "";

  alert("Successfully added");
  return true;
}

function renderTask() {
  let content = "<ul>";

  taskList.forEach((task, index) => {
    content += `<li class="todo-item">
      <div class="task-name">
        <span class="todo-text">${task.name}</span>
        <div class="controller">
          <button class="delete-button button" onclick="deleteTask(${index})">Delete</button>
          <textarea type="text" class="update-content" placeholder="Please enter a task name"></textarea>
          <button class="update-button button" onclick="updateTask(${index})">Update</button>
        </div>
      </div>
    </li>`;
  });

  content += "</ul>";

  document.querySelector("#todo-content").innerHTML = content;
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTask();
}

setTimeout (function () {
  isRemember = false;
  localStorage.setItem("isRemember", isRemember);
}, 10000);

function onClickLogout() {
  listUser.pop();
  localStorage.setItem("listUser", JSON.stringify(listUser));
  window.location.href = "http://127.0.0.1:5500/source/pages/SignIn/";
  isLogin = false;
  localStorage.setItem("isLogin", isLogin);
}

