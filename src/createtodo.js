/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
// imported functions
import toDoCreate from './toDoclass';
import { removeATask } from './newProject';

// counter for todo values
export let IC = localStorage.getItem('indexC');

// check for counter values
export function checkCounter() {
  if (Number.isNaN(IC)) {
    IC = 0;
  } else {
    ++IC;
  }

  localStorage.setItem('indexC', IC);
  return IC;
}

// declaring masterlist map to hold todo tasks
export let masterList = new Map();

// checks localStorage and sets it up
export function checkMapList() {
  const storage = localStorage.getItem('MLToDo');
  let masterL;

  if (storage !== null) masterL = new Map(JSON.parse(localStorage.MLToDo));

  if (masterL === undefined) {
    masterList = new Map();
  } else {
    masterList = masterL;
  }

  repopulateTask();
}

// adds todos to localStorage
export function addLSTODO() {
  localStorage.MLToDo = JSON.stringify(Array.from(masterList));
}

checkMapList();

// creates a new todo from the class constructor
export function createNewToDo(e) {
  e.preventDefault();
  checkCounter();
  const newTask = new toDoCreate();
  newTask.title = TDTitle.value;
  newTask.description = TDDescrip.value;
  newTask.dueDate = TDDueDate.value;
  newTask.priority = TDPriority.value;
  newTask.project = addToProject.value;
  masterList.set(IC, newTask);
  repopulateTask();
}

// repopulates todos on the html page
export function repopulateTask() {
  toDoSection.innerHTML = '';
  masterList.forEach((values, keys) => {
    const newSection = document.createElement('div');
    newSection.id = keys;
    newSection.classList.add('ToDoListing');
    newSection.innerHTML =
      values.title +
      '<p>' +
      values.description +
      '<p>' +
      values.dueDate +
      '<p>' +
      'Priority: </lb>' + values.priority;
    toDoSection.appendChild(newSection);
    const changePrioritySection = document.createElement('div');
    changePrioritySection.classList.add('PriorityBtn');
    changePrioritySection.innerHTML = priorityOptions.innerHTML;
    changePrioritySection.id = keys;
    changePrioritySection.addEventListener('change', (e) => prioritySwitch(e));
    newSection.appendChild(changePrioritySection);
    const deleteSection = document.createElement('div');
    deleteSection.classList.add('deleteToDoBtn');
    deleteSection.id = values.project;
    deleteSection.innerHTML = '<button id =' + keys + '>Remove Task?</button>';
    deleteSection.addEventListener('click', (e) => {
      taskdelete(e), removeATask(e);
    });
    newSection.appendChild(deleteSection);
  });
  addLSTODO();
}

// function that handles deleting tasks
export function taskdelete(e) {
  const deleteID = parseInt(e.target.id, 10);
  masterList.delete(deleteID);
  repopulateTask();
}

// function that handles changing the priority
export function prioritySwitch(e) {
  e.preventDefault();
  const priorityValue = e.target.value;
  const keyValue = parseInt(e.target.parentElement.id, 10);
  masterList.set(keyValue, {
    ...masterList.get(keyValue),
    priority: priorityValue,
  });
  repopulateTask();
}
