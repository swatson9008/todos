
export let IC = localStorage.getItem("indexC");

export function checkCounter () {
  if(Number.isNaN(IC)){
    IC=0;
  } else {
    ++IC;
  }

console.log(IC);

localStorage.setItem("indexC", IC);
  return IC;
}

//export let masterL = new Map(JSON.parse(localStorage.MLToDo));

export let masterList = new Map();

export function checkMapList() {
    let storage = localStorage.getItem('MLToDo') // set 'storage' to whatever the contents of 'mlp' is
    let masterL; // create a new variable
    //if that storage ISN'T null, set the value of masterLP
    if(storage !== null) masterL = new Map(JSON.parse(localStorage.MLToDo));
  
    //if masterLP is still undefined, set masterPList to a new map like it seemed like you wanted
    if (masterL === undefined) {
      //in your original code you wrote: masterPList === new Map()
      masterList = new Map()
    } else {
      // else set value of masterPList to masterLP
      masterList = masterL
    }
  
    // repopulate projects
    repopulateTask();
}

export function addLSTODO () {
    localStorage.MLToDo = JSON.stringify(Array.from(masterList));
    console.log(localStorage.MLToDo);
}

checkMapList();

import toDoCreate from "./toDoclass";

import { removeATask } from "./newProject";





export function createNewToDo (e){
    e.preventDefault();
    checkCounter()
    let newTask = new toDoCreate;
    newTask.title = TDTitle.value;
    newTask.description = TDDescrip.value;
    newTask.dueDate = TDDueDate.value;
    newTask.priority = TDPriority.value;
    newTask.project = addToProject.value;
    masterList.set(IC, newTask);
    console.log(masterList);
    console.log(addToProject.value);
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
    deleteSection.id = values.project;
    deleteSection.innerHTML = "<button id =" + keys + ">Delete Task?</button>";
    deleteSection.addEventListener("click", e => {taskdelete(e), removeATask(e)});
    newSection.appendChild(deleteSection);
    });
    addLSTODO();
    

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