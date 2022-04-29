import { projects, projects_Favorite } from './project';

const editProjectList = () => {
  // Clears All Old Project Buttons
  const temp = document.querySelectorAll('.project');
  temp.forEach((element) => {
    element.remove();
  });

  drawDom(projects_Favorite);
  drawDom(projects);

  function drawDom(array) {
    for (let i = 0; i < array.length; i++) {
      const projectList = document.querySelector('.projects_Expansion_Panel');

      const project_Container = document.createElement('button');
      project_Container.classList.add('project');
      project_Container.value = array[i].getID();
      project_Container.addEventListener('click', function () {
        showCurrentProject(this.value, array[i].getFavorite());
      });

      const project_Text = document.createElement('p');
      project_Text.textContent = (array[i].getTitle());
      if (array[i].getFavorite() == true) {
        project_Text.style.color = ('blue');
      }

      project_Container.appendChild(project_Text);
      projectList.appendChild(project_Container);
    }
  }
}

// Loads Selected project

const showCurrentProject = (value, isFavorite) => {
  const temp = document.querySelectorAll('.container');
  temp.forEach((element) => {
    element.remove();
  });

  const shownIndex = findWithAttr(value, isFavorite);

  if (isFavorite) {
    drawDom(projects_Favorite);
  } else {
    drawDom(projects);
  }

  function drawDom(array) {
    const content = document.querySelector('.content');
    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = (array[shownIndex].getTitle());

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = (array[shownIndex].getDescription());

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('addTask');
    addTaskButton.addEventListener('click', () => {
      showProjectForm();
    });
    addTaskButton.value = value;
    addTaskButton.textContent = ('Add Task');

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(addTaskButton);
    container.appendChild(taskContainer);

    content.appendChild(container);

    console.log('updaing taslk form');
    updateTaskForm(value);
  }
}

// Returns Index of selected Project.

function findWithAttr(value, isFavorite) {
  if (isFavorite) {
    for (var i = 0; i < projects_Favorite.length; i++) {
      if (projects_Favorite[i].getID() == value) {
        return i;
      }
    }
    return -1;
  }
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].getID() == value) {
      return i;
    }
  }
  return -1;
}

// Toggles dropdown

function toggleDrop() {
  const arrow = document.querySelector('.arrow');

  if (arrow.getAttribute('transform') == 'rotate(-90)') {
    arrow.setAttribute('transform', 'rotate(0)');
  } else {
    arrow.setAttribute('transform', 'rotate(-90)');
  }
}

function showForm() {
  const form = document.querySelector('#projectForm');
  form.style.display = ('block');
}

function hideForm() {
  // Hides Form
  const form = document.querySelector('#form');
  const Form = document.querySelector('#projectForm');
  Form.style.display = ('none');
  form.reset();
}

function hideProjectForm() {
  const form = document.querySelector('#taskForm');
  const Form = document.querySelector('#taskFormHolder');
  Form.style.display = ('none');
  form.reset();
}

function showProjectForm() {
  const form = document.querySelector('#taskFormHolder');
  form.style.display = ('block');
}

function updateTaskForm(value) {

  let temp = document.querySelectorAll('.taskContainer');
  temp.forEach(element => {
    element.remove();
  })

  let index = -500;
  if(value >= 500) {
    index = findWithAttr(value, true);
    drawTasks(projects_Favorite);
  } else {
    index = findWithAttr(value, false);
    drawTasks(projects);
  }

  function drawTasks(array) {
    let taskArray = array[index].returnTask();
    let container = document.querySelector('.container');


    taskArray.forEach(element => {
      let taskContainer = document.createElement('div');
      taskContainer.classList.add('taskContainer');

      const title = document.createElement('p');
      title.textContent = element.getTitle();

      const description = document.createElement('p');
      description.textContent = element.getDescription();

      taskContainer.appendChild(title);
      taskContainer.appendChild(description);
      container.appendChild(taskContainer);
    })
  }

}
export {
  editProjectList, toggleDrop, showForm, hideForm, hideProjectForm, showProjectForm, findWithAttr, updateTaskForm,
};
