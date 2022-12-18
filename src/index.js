

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

const masterList = new Map();


import { createNewToDo } from "./createtodo";
import createNewProject from "./newProject";

import { indexCounter } from "./createtodo";

class toDoCreate {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const toDoCollection = (toDoCreate, masterList) => {
    let defaultCollection = new Map();
    masterList.array.forEach(element => {
        defaultCollection.set;
        return defaultCollection;
    });   

}

submitB.addEventListener("click", e => createNewToDo(e));

submitP.addEventListener("click", e => createNewProject(e));




function changePriority () {

}