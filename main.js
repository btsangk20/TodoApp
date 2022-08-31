const length = document.getElementsByClassName('delete-button').length;

let buttonEditTask = document.getElementsByClassName('edit-button')[0]
buttonEditTask.addEventListener('click', function () {
  if (buttonEditTask.className === 'edit-button') {
    buttonEditTask.className = 'save-button'
    buttonEditTask.innerHTML = 'Save'
    displayForEdit()
  }
  else {
    buttonEditTask.className = 'edit-button'
    buttonEditTask.innerHTML = 'Edit'
    hiddenForSave()
  }
})

function displayForEdit () {
  for (var i = 0; i < length; ++i) {
    let button = document.getElementsByClassName('update-button')[i]
    button.style.display = 'flex'
    //display add button
    let addButton = document.getElementsByClassName('add-button')[0]
    addButton.style.display = 'flex'
    //display delete button
    let deleteButton = document.getElementsByClassName('delete-button')[i]
    deleteButton.style.display = 'flex'

    let inputContent = document.getElementsByClassName('input-content')[0]
    inputContent.style.display = 'flex'

    let updateContent = document.getElementsByClassName('update-content')[i]
    updateContent.style.display = 'flex'
  }
}

function hiddenForSave() {
  for (var i = 0; i < length; ++i) {
    let button = document.getElementsByClassName('update-button')[i]
    button.style.display = 'none'

    let addButton = document.getElementsByClassName('add-button')[0]
    addButton.style.display = 'none'

    let deleteButton = document.getElementsByClassName('delete-button')[i]
    deleteButton.style.display = 'none'

    let inputContent = document.getElementsByClassName('input-content')[0]
    inputContent.style.display = 'none'

    let updateContent = document.getElementsByClassName('update-content')[i]
    updateContent.style.display = 'none'
  }
}

for (var i = 0; i < length; ++i) {
  let buttonUpdateTask = document.getElementsByClassName('update-button')[i]
  let taskUpdate = document.getElementsByClassName('update-content')[i]
  let index = i
  buttonUpdateTask.addEventListener('click', function () {
    if (!taskUpdate.value) {
      alert('Please enter a task name')
      return
    }
    //get index of task
    let tasks = []
    tasks.push({
      task: taskUpdate.value,
    })

    taskUpdate.value = ''

    updateTaskName(tasks, index)

  })
}

function updateTaskName(tasks = [], index) {
  tasks.forEach((task) => {
    console.log(task)
    let taskName = document.getElementsByClassName('todo-text')[index]
    taskName.innerHTML = task.task
  })
}
//Add new task
let buttonAddNewTask = document.getElementsByClassName('add-button')[0]
let taskNameElement = document.getElementsByClassName('input-content')[0]

buttonAddNewTask.addEventListener('click', function() {
  if (!taskNameElement.value) {
    alert('Please enter a task name')
    return false
  }
  let tasks = []
  tasks.push({
    name: taskNameElement.value,
  })
  taskNameElement.value = ''

  renderTask(tasks) 
} )

function renderTask (tasks = []) {
  let content = '<ul>'

  tasks.forEach((task) => {
    content += `<li class="todo-item">
      <div class="task-name">
        <span class="todo-text">${task.name}</span>
        <button class="delete-button button">Delete</button>
        <textarea type="text" class="update-content" placeholder="Please enter a task name"></textarea>
        <button class="update-button button">Update</button>
      </div>
    </li>`
  })

  content += '</ul>'

  document.querySelector('#todo-content').innerHTML += content
}

//delete task
for (var i = 0; i < length; ++i) {
  document.getElementsByClassName('delete-button')[i].onclick = function () {
    let task = this.parentElement.parentElement
    task.remove()
  }
} 