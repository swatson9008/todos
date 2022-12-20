
export let indexCounter = 0

export const masterList = new Map();


import toDoCreate from "./toDoclass";





export function createNewToDo (e){
    e.preventDefault();
    let newTask = new toDoCreate;
    newTask.title = TDTitle.value;
    newTask.description = TDDescrip.value;
    newTask.dueDate = TDDueDate.value;
    newTask.priority = TDPriority.value;
    masterList.set(newTask, indexCounter);
    console.log(masterList);

    indexCounter++;
    repopulateTask(e);
}




export function repopulateTask(e){
    e.preventDefault()
    toDoSection.innerHTML = "";
    masterList.forEach((values, keys) => {
    let newSection = document.createElement("div");
    newSection.id = values;
    newSection.classList.add("ToDoListing");
    newSection.innerHTML = keys.title + "<p>" + keys.description + "<p>" + keys.dueDate + "<p>" + keys.priority;
    toDoSection.appendChild(newSection);
    let changePrioritySection = document.createElement("div");
    changePrioritySection.classList.add("PriorityBtn");
    changePrioritySection.innerHTML = priorityOptions.innerHTML;
    newSection.appendChild(changePrioritySection);
    let deleteSection = document.createElement("div");
    deleteSection.classList.add("deleteToDoBtn");
    deleteSection.id = values;
    deleteSection.innerHTML = "<button>Delete Task?</button>";
    deleteSection.addEventListener("click", e => taskdelete(e));
    newSection.appendChild(deleteSection);
    });
}

export function taskdelete (e){
    e.preventDefault();
    console.log(e.target.id);
    
}

