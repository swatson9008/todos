/* eslint-disable no-console */
/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
// imported functions and maps
import { masterList } from './createtodo';
import projectCreate from './projectClass';
import { taskdelete } from './createtodo';

// counter for project values
export let ICP = localStorage.getItem('indexCP');

// check for counter values
export function checkCounterP() {
  if (Number.isNaN(ICP)) {
    ICP = 0;
  } else {
    ++ICP;
  }

  localStorage.setItem('indexCP', ICP);
  return ICP;
}

// declaring masterlist map to hold projects
export let masterPList = new Map();

// checks localStorage and sets it up
export function checkMapPList() {
  const storage = localStorage.getItem('mlp');
  let masterLP;

  if (storage !== null) masterLP = new Map(JSON.parse(localStorage.mlp));

  if (masterLP === undefined) {
    masterPList = new Map();
  } else {
    masterPList = masterLP;
  }

  repopulateProjects();
}

// adds projects to localStorage
export function addLSP() {
  localStorage.mlp = JSON.stringify(Array.from(masterPList));
}

checkMapPList();

// creates a new project from the class constructor
export default function createNewProject(e) {
  e.preventDefault();
  checkCounterP();
  const newP = new projectCreate();
  newP.name = TDProject.value;
  newP.tasks = [];
  masterPList.set(ICP, newP);
  repopulateProjects();
  TDProject.value = '';
}

// repopulates projects on the html page
export function repopulateProjects() {
  projectSection.innerHTML = '';
  addToProject.innerHTML = '';
  const blankSection = document.createElement('option');
  blankSection.textContent = '';
  addToProject.appendChild(blankSection);
  masterPList.forEach((values, keys) => {
    const newProjectSection = document.createElement('div');
    newProjectSection.id = keys;
    newProjectSection.classList.add('projectLists');
    newProjectSection.innerHTML = `${values.name}<p>` + `<p>${values.tasks}`;
    projectSection.appendChild(newProjectSection);
    const projectOption = document.createElement('option');
    projectOption.textContent = values.name;
    projectOption.value = keys;
    projectOption.id = values.name;
    addToProject.appendChild(projectOption);
    const projectDelete = document.createElement('div');
    projectDelete.id = keys;
    projectDelete.innerHTML = `<button id =${keys}>Delete Project?</button>`;
    projectDelete.addEventListener('click', (e) => deleteProject(e));
    newProjectSection.appendChild(projectDelete);
  });
  addLSP();
}

// function that handles when a new todo is added to a project
export function addTasks(e) {
  e.preventDefault();
  const projectValue = parseInt(addToProject.value, 10);
  const temp = masterPList.get(projectValue);
  const taskName = TDTitle.value;
  temp.tasks.push(taskName);
  masterPList.set(projectValue, temp);
  repopulateProjects();
}

// function that handles updating projects when a task is deleted
export function removeATask(e) {
  e.preventDefault();
  const projectValue = parseInt(e.target.parentElement.id, 10);
  const taskValue = parseInt(e.target.id, 10);
  const temp = masterPList.get(projectValue);
  temp.tasks.splice(taskValue, 1);
  masterPList.set(projectValue, temp);
  repopulateProjects();
}

// function that handles deleting projects
export function deleteProject(e) {
  e.preventDefault;
  const projectValue = parseInt(e.target.id, 10);
  masterPList.delete(projectValue);
  repopulateProjects();
}
