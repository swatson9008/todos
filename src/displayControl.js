/* eslint-disable space-before-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-console */

export function displayHomeTab(e) {
  e.preventDefault();
  toDoCover.style.display = 'block';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoSection.style.display = 'none';
  projectSection.style.display = 'none';
}

export default function displayTaskAdd(e) {
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'block';
  createProjects.style.display = 'none';
  toDoSection.style.display = 'none';
  projectSection.style.display = 'none';
}

export function displayProjectTab(e) {
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'block';
  toDoSection.style.display = 'none';
  projectSection.style.display = 'none';
}

export function displayTaskList(e){
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoSection.style.display = 'block';
  projectSection.style.display = 'none';
}

export function displayProjectLists(e){
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoSection.style.display = 'none';
  projectSection.style.display = 'block';
}
