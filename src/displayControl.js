/* eslint-disable space-before-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-console */

// imported image for bg
import paperTexture from './asset/papertexture.jpg';

export function displayHomeTab(e) {
  e.preventDefault();
  toDoCover.style.display = 'block';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectSection.style.display = 'none';
  mainContainer.style.backgroundImage = '';
}

export default function displayTaskAdd(e) {
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'block';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectSection.style.display = 'none';
  mainContainer.style.backgroundImage = '';
}

export function displayProjectTab(e) {
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'block';
  toDoWrap.style.display = 'none';
  projectSection.style.display = 'none';
  mainContainer.style.backgroundImage = '';
}

export function displayTaskList(e){
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'block';
  projectSection.style.display = 'none';
  mainContainer.style.backgroundImage = paperTexture;
  mainContainer.style.backgroundSize = 'cover';
}

export function displayProjectLists(e){
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectSection.style.display = 'block';
  mainContainer.style.backgroundImage = paperTexture;
  mainContainer.style.backgroundSize = 'cover';
}
