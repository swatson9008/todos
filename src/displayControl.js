/* eslint-disable space-before-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-console */

// imported image for bg
import paperTexture from './asset/papertexture.jpg';
import folderTexture from './asset/folderbg.jpg';

export function displayHomeTab(e) {
  e.preventDefault();
  toDoCover.style.display = 'block';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectWrap.style.display = 'none';
  mainContainer.style.backgroundImage = `linear-gradient(0deg, rgba(158, 158, 158, 0.3), rgba(165, 165, 165, 0.3)), url(${folderTexture})`;
}

export default function displayTaskAdd(e) {
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'block';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectWrap.style.display = 'none';
  mainContainer.style.backgroundImage = `linear-gradient(0deg, rgba(158, 158, 158, 0.3), rgba(165, 165, 165, 0.3)), url(${folderTexture})`;
}

export function displayProjectTab(e) {
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'block';
  toDoWrap.style.display = 'none';
  projectWrap.style.display = 'none';
  mainContainer.style.backgroundImage = `linear-gradient(0deg, rgba(158, 158, 158, 0.3), rgba(165, 165, 165, 0.3)), url(${folderTexture})`;
}

export function displayTaskList(e){
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'block';
  projectWrap.style.display = 'none';
  mainContainer.style.backgroundImage = `url(${paperTexture})`;
  mainContainer.style.backgroundSize = 'cover';
}

export function displayProjectLists(e){
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectWrap.style.display = 'block';
  mainContainer.style.backgroundImage = `url(${paperTexture})`;
  mainContainer.style.backgroundSize = 'cover';
}
