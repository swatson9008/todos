
//imported functions
import toDoCreate from "./toDoclass";
import { removeATask } from "./newProject";


//counter for todo values
export let IC = localStorage.getItem("indexC");

//check for counter values
export function checkCounter () {
  if(Number.isNaN(IC)){
    IC=0;
  } else {
    ++IC;
  }

localStorage.setItem("indexC", IC);
  return IC;
}


//declaring masterlist map to hold todo tasks
export let masterList = new Map();

//checks localStorage and sets it up
export function checkMapList() {
    let storage = localStorage.getItem('MLToDo') 
    let masterL; 
  
    if(storage !== null) masterL = new Map(JSON.parse(localStorage.MLToDo));
  

    if (masterL === undefined) {
      
      masterList = new Map()
    } else {
      
      masterList = masterL
    }
  
   
    repopulateTask();
}

//adds todos to localStorage
export function addLSTODO () {
    localStorage.MLToDo = JSON.stringify(Array.from(masterList));
}

checkMapList();


//creates a new todo from the class constructor
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