
export let indexCounter = 0

const masterList = new Map();



export default class toDoCreate {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}


export function createNewToDo (e){
    e.preventDefault();
    let newTask = new toDoCreate;
    newTask.title = TDTitle.value;
    newTask.description = TDDescrip.value;
    newTask.dueDate = TDDueDate.value;
    newTask.priority = TDPriority.value;
    masterList.set(newTask, indexCounter);
    console.log(masterList);
    let newSection = document.createElement("div");
    newSection.id = indexCounter;
    newSection.classList.add("ToDoListing");
    newSection.innerHTML = newTask.title + "<p>" + newTask.description + "<p>" + newTask.dueDate + "<p>" + newTask.priority;
    toDoSection.appendChild(newSection);
    let changePrioritySection = document.createElement("div");
    changePrioritySection.classList.add("PriorityBtn");
    changePrioritySection.innerHTML = priorityOptions.innerHTML;
    newSection.appendChild(changePrioritySection);
    let deleteSection = document.createElement("div");
    deleteSection.classList.add("deleteToDoBtn");
    deleteSection.innerHTML = "Delete Task?";
    newSection.appendChild(deleteSection);

    indexCounter++;
}

