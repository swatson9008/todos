/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createtodo.js":
/*!***************************!*\
  !*** ./src/createtodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IC": () => (/* binding */ IC),
/* harmony export */   "addLSTODO": () => (/* binding */ addLSTODO),
/* harmony export */   "checkCounter": () => (/* binding */ checkCounter),
/* harmony export */   "checkMapList": () => (/* binding */ checkMapList),
/* harmony export */   "createNewToDo": () => (/* binding */ createNewToDo),
/* harmony export */   "masterList": () => (/* binding */ masterList),
/* harmony export */   "prioritySwitch": () => (/* binding */ prioritySwitch),
/* harmony export */   "repopulateTask": () => (/* binding */ repopulateTask),
/* harmony export */   "taskdelete": () => (/* binding */ taskdelete)
/* harmony export */ });
/* harmony import */ var _toDoclass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoclass */ "./src/toDoclass.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
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



// counter for todo values
let IC = localStorage.getItem('indexC');

// check for counter values
function checkCounter() {
  if (Number.isNaN(IC)) {
    IC = 0;
  } else {
    ++IC;
  }

  localStorage.setItem('indexC', IC);
  return IC;
}

// declaring masterlist map to hold todo tasks
let masterList = new Map();

// checks localStorage and sets it up
function checkMapList() {
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
function addLSTODO() {
  localStorage.MLToDo = JSON.stringify(Array.from(masterList));
}

checkMapList();

// creates a new todo from the class constructor
function createNewToDo(e) {
  e.preventDefault();
  checkCounter();
  const newTask = new _toDoclass__WEBPACK_IMPORTED_MODULE_0__["default"]();
  newTask.title = TDTitle.value;
  newTask.description = TDDescrip.value;
  newTask.dueDate = TDDueDate.value;
  newTask.priority = TDPriority.value;
  newTask.project = addToProject.value;
  masterList.set(IC, newTask);
  repopulateTask();
}

// repopulates todos on the html page
function repopulateTask() {
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
      values.priority;
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
    deleteSection.innerHTML = '<button id =' + keys + '>Delete Task?</button>';
    deleteSection.addEventListener('click', (e) => {
      taskdelete(e), (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.removeATask)(e);
    });
    newSection.appendChild(deleteSection);
  });
  addLSTODO();
}

// function that handles deleting tasks
function taskdelete(e) {
  const deleteID = parseInt(e.target.id, 10);
  masterList.delete(deleteID);
  repopulateTask();
}

// function that handles changing the priority
function prioritySwitch(e) {
  e.preventDefault();
  const priorityValue = e.target.value;
  const keyValue = parseInt(e.target.parentElement.id, 10);
  masterList.set(keyValue, {
    ...masterList.get(keyValue),
    priority: priorityValue,
  });
  repopulateTask();
}


/***/ }),

/***/ "./src/displayControl.js":
/*!*******************************!*\
  !*** ./src/displayControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTaskAdd),
/* harmony export */   "displayHomeTab": () => (/* binding */ displayHomeTab),
/* harmony export */   "displayProjectLists": () => (/* binding */ displayProjectLists),
/* harmony export */   "displayProjectTab": () => (/* binding */ displayProjectTab),
/* harmony export */   "displayTaskList": () => (/* binding */ displayTaskList)
/* harmony export */ });
/* eslint-disable space-before-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-console */

function displayHomeTab(e) {
  e.preventDefault();
  toDoCover.style.display = 'block';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectSection.style.display = 'none';
  mainContainer.style.backgroundImage = '';
}

function displayTaskAdd(e) {
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'block';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectSection.style.display = 'none';
  mainContainer.style.backgroundImage = '';
}

function displayProjectTab(e) {
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'block';
  toDoWrap.style.display = 'none';
  projectSection.style.display = 'none';
  mainContainer.style.backgroundImage = '';
}

function displayTaskList(e){
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'block';
  projectSection.style.display = 'none';
  mainContainer.style.backgroundImage = 'url("/./src/img/papertexture.jpg")';
  mainContainer.style.backgroundSize = 'cover';
}

function displayProjectLists(e){
  e.preventDefault();
  toDoCover.style.display = 'none';
  toDoCreation.style.display = 'none';
  createProjects.style.display = 'none';
  toDoWrap.style.display = 'none';
  projectSection.style.display = 'block';
  mainContainer.style.backgroundImage = 'url("/./src/img/papertexture.jpg")';
  mainContainer.style.backgroundSize = 'cover';
}


/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICP": () => (/* binding */ ICP),
/* harmony export */   "addLSP": () => (/* binding */ addLSP),
/* harmony export */   "addTasks": () => (/* binding */ addTasks),
/* harmony export */   "checkCounterP": () => (/* binding */ checkCounterP),
/* harmony export */   "checkMapPList": () => (/* binding */ checkMapPList),
/* harmony export */   "default": () => (/* binding */ createNewProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "masterPList": () => (/* binding */ masterPList),
/* harmony export */   "removeATask": () => (/* binding */ removeATask),
/* harmony export */   "repopulateProjects": () => (/* binding */ repopulateProjects)
/* harmony export */ });
/* harmony import */ var _createtodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtodo */ "./src/createtodo.js");
/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectClass */ "./src/projectClass.js");
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




// counter for project values
let ICP = localStorage.getItem('indexCP');

// check for counter values
function checkCounterP() {
  if (Number.isNaN(ICP)) {
    ICP = 0;
  } else {
    ++ICP;
  }

  localStorage.setItem('indexCP', ICP);
  return ICP;
}

// declaring masterlist map to hold projects
let masterPList = new Map();

// checks localStorage and sets it up
function checkMapPList() {
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
function addLSP() {
  localStorage.mlp = JSON.stringify(Array.from(masterPList));
}

checkMapPList();

// creates a new project from the class constructor
function createNewProject(e) {
  e.preventDefault();
  checkCounterP();
  const newP = new _projectClass__WEBPACK_IMPORTED_MODULE_1__["default"]();
  newP.name = TDProject.value;
  newP.tasks = [];
  masterPList.set(ICP, newP);
  repopulateProjects();
  TDProject.value = '';
}

// repopulates projects on the html page
function repopulateProjects() {
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
function addTasks(e) {
  e.preventDefault();
  const projectValue = parseInt(addToProject.value, 10);
  const temp = masterPList.get(projectValue);
  const taskName = TDTitle.value;
  temp.tasks.push(taskName);
  masterPList.set(projectValue, temp);
  repopulateProjects();
}

// function that handles updating projects when a task is deleted
function removeATask(e) {
  e.preventDefault();
  const projectValue = parseInt(e.target.parentElement.id, 10);
  const taskValue = parseInt(e.target.id, 10);
  const temp = masterPList.get(projectValue);
  temp.tasks.splice(taskValue, 1);
  masterPList.set(projectValue, temp);
  repopulateProjects();
}

// function that handles deleting projects
function deleteProject(e) {
  e.preventDefault;
  const projectValue = parseInt(e.target.id, 10);
  masterPList.delete(projectValue);
  repopulateProjects();
}


/***/ }),

/***/ "./src/projectClass.js":
/*!*****************************!*\
  !*** ./src/projectClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreate)
/* harmony export */ });
// class constructor for the projects
class projectCreate {
  constructor(name, description, tasks) {
    this.name = name;
    this.tasks = tasks;
  }
}


/***/ }),

/***/ "./src/toDoclass.js":
/*!**************************!*\
  !*** ./src/toDoclass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoCreate)
/* harmony export */ });
// class constructor for the todos
class toDoCreate {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createtodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtodo */ "./src/createtodo.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _toDoclass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoclass */ "./src/toDoclass.js");
/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectClass */ "./src/projectClass.js");
/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayControl */ "./src/displayControl.js");
/* eslint-disable no-sequences */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
// global variables
// imported variables and functions
















const submitB = document.getElementById('submitB');
const TDTitle = document.getElementById('TDTitle');
const TDDescrip = document.getElementById('TDDescrip');
const TDDueDate = document.getElementById('TDDueDate');
const TDPriority = document.getElementById('TDPriority');
const checkLog = document.getElementById('checkLogs');
const submitP = document.getElementById('submitP');
const TDProject = document.getElementById('TDProject');
const toDoSection = document.getElementById('toDoSection');
const projectSection = document.getElementById('projectSection');
const priorityOptions = document.getElementById('priorityOptions');
const deleteTask = document.getElementById('deleteToDoBtn');
const addToProject = document.getElementById('addToProject');
const toDoCreation = document.getElementById('toDoCreation');
const toDoCover = document.getElementById('toDoCover');
const createProjects = document.getElementById('createProjects');
const mainContainer = document.getElementById('mainContainer');
const toDoWrap = document.getElementById('toDoWrap');

const homeTab = document.getElementById('homeTab');
const tabTaskAdd = document.getElementById('taskAdd');
const tabProjectAdd = document.getElementById('projectAdd');
const tabTaskList = document.getElementById('taskList');
const tabProjectList = document.getElementById('projectList');

// event listeners
submitB.addEventListener('click', (e) => {
  (0,_createtodo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(e), (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.addTasks)(e);
});

submitP.addEventListener('click', (e) => (0,_newProject__WEBPACK_IMPORTED_MODULE_1__["default"])(e));

homeTab.addEventListener('click', (e) => (0,_displayControl__WEBPACK_IMPORTED_MODULE_4__.displayHomeTab)(e));

tabTaskAdd.addEventListener('click', (e) => (0,_displayControl__WEBPACK_IMPORTED_MODULE_4__["default"])(e));

tabProjectAdd.addEventListener('click', (e) => (0,_displayControl__WEBPACK_IMPORTED_MODULE_4__.displayProjectTab)(e));

tabTaskList.addEventListener('click', (e) => (0,_displayControl__WEBPACK_IMPORTED_MODULE_4__.displayTaskList)(e));

tabProjectList.addEventListener('click', (e) => (0,_displayControl__WEBPACK_IMPORTED_MODULE_4__.displayProjectLists)(e));

})();

/******/ })()
;
//# sourceMappingURL=main.js.map