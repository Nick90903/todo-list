import {
  hideForm, hideProjectForm, showForm, showProjectForm, toggleDrop,
} from './dom';
import { addNewProject, addTask } from './project';

// Enables Project Dropdown and Hide

const projectDropdownDetection = () => {
  const projectsButton = document.querySelector('.project_button');

  projectsButton.addEventListener('click', () => {
    toggleDrop();
  });
  const arrow = document.querySelector('.arrow');
  arrow.setAttribute('transform', 'rotate(0)');
};

// Enables Add Project Button

const addProjectDetection = () => {
  const addButton = document.querySelector('.adder_Icon');

  addButton.addEventListener('click', () => {
    showForm();
  });
};

// Enables Form Buttons

const formButtonDetection = () => {
  const cancel = document.querySelector('#cancel');
  cancel.addEventListener('click', () => {
    hideForm();
  });

  const create = document.querySelector('#create');
  create.addEventListener('click', () => {
    addNewProject();
  });
};

function taskButtons() {
  const cancel = document.querySelector('#projectCancel');
  cancel.addEventListener('click', () => {
    hideProjectForm();
  });

  const create = document.querySelector('#projectCreate');
  create.addEventListener('click', () => {
    let temp = document.querySelector('.addTask');
    addTask(temp.value);
  });
}

export function addListeners() {
  projectDropdownDetection();
  addProjectDetection();
  formButtonDetection();
  taskButtons();
}
