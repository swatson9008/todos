

let submitB = document.getElementById("submitB");
let TDTitle = document.getElementById("TDTitle");
let TDDescrip = document.getElementById("TDDescrip");
let TDDueDate = document.getElementById("TDDueDate");
let TDPriority = document.getElementById("TDPriority");
let checkLog = document.getElementById("checkLogs");

let submitP = document.getElementById("submitP");
let TDProject = document.getElementById("TDProject");
let projectSection = document.getElementById("projectSection");

const masterList = new Map();


import { createNewToDo } from "./createtodo";
import createNewProject from "./newProject";

class toDoCreate {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const secondExample = new toDoCreate ("Sweep Floors", "Clean floors", "Tomorrow", "Low");

submitB.addEventListener("click", e => createNewToDo(e));

submitP.addEventListener("click", e => createNewProject(e));

//checkLog.addEventListener("click", e => checkLogs(e));


/*function checkLogs (e) {
    e.preventDefault();
    let x = indexCounter.getNext;
    return x;
}

createNewToDo();*/