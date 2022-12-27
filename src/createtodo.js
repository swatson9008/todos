
export let indexCounter = 0

export const masterList = new Map();


import toDoCreate from "./toDoclass";

import { removeATask } from "./newProject";





export function createNewToDo (e){
    e.preventDefault();
    let newTask = new toDoCreate;
    newTask.title = TDTitle.value;
    newTask.description = TDDescrip.value;
    newTask.dueDate = TDDueDate.value;
    newTask.priority = TDPriority.value;
    newTask.project = addToProject.value;
    masterList.set(indexCounter, newTask);
    console.log(masterList);

    indexCounter++;
    repopulateTask();
}




export function repopulateTask(){
  
    toDoSection.innerHTML = "";
    masterList.forEach((values, keys) => {
    let newSection = document.createElement("div");
    newSection.id = keys;
    newSection.classList.add("ToDoListing");
    newSection.innerHTML = values.title + "<p>" + values.description + "<p>" + values.dueDate + "<p>" + values.priority;
    toDoSection.appendChild(newSection);
    let changePrioritySection = document.createElement("div");
    changePrioritySection.classList.add("PriorityBtn");
    changePrioritySection.innerHTML = priorityOptions.innerHTML;
    changePrioritySection.id = keys;
    changePrioritySection.addEventListener("change", e => prioritySwitch(e))
    newSection.appendChild(changePrioritySection);
    let deleteSection = document.createElement("div");
    deleteSection.classList.add("deleteToDoBtn");
    deleteSection.id = keys;
    deleteSection.innerHTML = "<button id =" + deleteSection.id + ">Delete Task?</button>";
    deleteSection.addEventListener("click", e => removeATask(e));
    newSection.appendChild(deleteSection);
    });
}

export function taskdelete (e){
    let deleteID = parseInt(e.target.id);
    masterList.delete(deleteID);
    repopulateTask();
    
}

export function prioritySwitch (e){
    e.preventDefault();
    let priorityValue = e.target.value;
    let keyValue = parseInt(e.target.parentElement.id);
    console.log(keyValue);
    masterList.set(keyValue, {
        ...masterList.get(keyValue), priority: priorityValue
    });
    console.log(masterList);
    repopulateTask();
}