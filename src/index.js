

let submitB = document.getElementById("submitB");
let TDTitle = document.getElementById("TDTitle");
let TDDescrip = document.getElementById("TDDescrip");
let TDDueDate = document.getElementById("TDDueDate");
let TDPriority = document.getElementById("TDPriority");
let checkLog = document.getElementById("checkLogs");

let submitP = document.getElementById("submitP");
let TDProject = document.getElementById("TDProject");
let toDoSection = document.getElementById("toDoSection");
let projectSection = document.getElementById("projectSection");
let priorityOptions = document.getElementById("priorityOptions");

let deleteTask = document.getElementById("deleteToDoBtn");

const masterList = new Map();

export default masterList;


import { createNewToDo, taskdelete } from "./createtodo";
import createNewProject from "./newProject";

import { indexCounter } from "./createtodo";

import deleteThisTask from "./taskDeletion.js";

import toDoCreate from "./toDoclass";

import { taskdelete } from "./createtodo";


const toDoCollection = (toDoCreate, masterList) => {
    let defaultCollection = new Map();
    masterList.array.forEach(element => {
        defaultCollection.set;
        return defaultCollection;
    });   

}

submitB.addEventListener("click", e => createNewToDo(e));

submitP.addEventListener("click", e => createNewProject(e));

//deleteTask.addEventListener("click", e => repopulateTask(e));

function repopulateTask(e){
    e.preventDefault()
    masterList.forEach((values, keys) => {
        let newTask = document.createElement("div");
        newTask.id = keys;
        newTask.textContent = "testing";
        toDoSection.appendChild(newTask);
    });
}