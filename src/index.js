/* eslint-disable camelcase */
import { addListeners } from './buttonDetection';
import { editProjectList } from './dom';
import { createProject, projects, projects_Favorite } from './project';

projects.push(createProject('Name', 0, false, '2022-04-12', 2));
projects_Favorite.push(createProject('Name Favorite', 0, true, '2022-04-12', 2));
editProjectList();
addListeners();
