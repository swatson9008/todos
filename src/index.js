/* eslint-disable no-sequences */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
// global variables
// imported variables and functions
import { masterList } from './createtodo';
import { createNewToDo, taskdelete } from './createtodo';
import createNewProject, {
  projectCounter, masterPList, repopulateProjects, addTasks, ICP, checkCounterP, checkMapPList, addLSP, repopulatePStorage,
} from './newProject';
import toDoCreate from './toDoclass';
import { repopulateTask } from './createtodo';
import projectCreate from './projectClass';
import { IC } from './createtodo';
import { checkCounter } from './createtodo';
import { checkMapList } from './createtodo';
import { addLSTODO } from './createtodo';

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

// event listeners
submitB.addEventListener('click', (e) => {
  createNewToDo(e), addTasks(e);
});
submitP.addEventListener('click', (e) => createNewProject(e));
