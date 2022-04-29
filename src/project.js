/* eslint-disable camelcase */
import { editProjectList, hideForm } from './dom';

export const projects = [];
export const projects_Favorite = [];

function sort() {
  projects.sort((a, b) => a.getPriority() - b.getPriority());
}

const createProject = (_title, _color, _favorite, _date, _priority) => {
  let title = _title;
  const color = _color;
  const isFavorite = _favorite;
  const date = _date;
  let priority = _priority;
  let description = 'Enter a description.';
  let ID = projects.length + projects_Favorite.length;
  const tasks = [];

  if (_favorite == true) {
    ID += 500;
  }

  const getTitle = () => title;
  const getColor = () => color;
  const getFavorite = () => isFavorite;
  const getDate = () => date;
  const getPriority = () => priority;
  const getID = () => ID;
  const getDescription = () => description;
  const getTasks = () => tasks;

  const updateTitle = (newTitle) => title = newTitle;
  const updateDescription = (newDescription) => description = newDescription;
  const updatePriority = (newPriority) => {
    priority = newPriority;
    sort();
  };
  const addTask = (_task) => {
    tasks.push(_task);
  };

  return {
    getTitle,
    getColor,
    getFavorite,
    getDate,
    getPriority,
    getID,
    getDescription,
    getTasks,
    updateTitle,
    updateDescription,
    updatePriority,
  };
};

// Create a project function

function addNewProject() {
  const form = document.querySelector('#form');
  if (form.favorite.checked == true) {
    projects_Favorite.push(createProject(
      form.name.value,
      form.color.value,
      form.favorite.checked,
      form.date.value,
      form.priority.value,
    ));
  } else {
    projects.push(createProject(
      form.name.value,
      form.color.value,
      form.favorite.checked,
      form.date.value,
      form.priority.value,
    ));
  }
  sort();
  editProjectList();
  hideForm();
}

// Factory Function for Project Creation

// Creates and adds tasks to project

// Sorts Projects by Priority

export { addNewProject, createProject };
