
//imported functions and maps
import { masterList } from "./createtodo";
import projectCreate from "./projectClass";
import { taskdelete } from "./createtodo";

//counter for project values
export let ICP = localStorage.getItem("indexCP");

//check for counter values
export function checkCounterP () {
  if(Number.isNaN(ICP)){
    ICP=0;
  } else {
    ++ICP;
  }

localStorage.setItem("indexCP", ICP);
  return ICP;
}

//declaring masterlist map to hold projects
export let masterPList = new Map();


//checks localStorage and sets it up
export function checkMapPList() {
    let storage = localStorage.getItem('mlp') 
    let masterLP;
    
    if(storage !== null) masterLP = new Map(JSON.parse(localStorage.mlp));
  
    
    if (masterLP === undefined) {
      
      masterPList = new Map()
    } else {
      
      masterPList = masterLP
    }
  
    
    repopulateProjects()
}

//adds projects to localStorage
export function addLSP () {
    localStorage.mlp = JSON.stringify(Array.from(masterPList));
}

checkMapPList();

//creates a new project from the class constructor
export default function createNewProject (e) {
    e.preventDefault();
    checkCounterP();
    let newP = new projectCreate;
    newP.name = TDProject.value;
    newP.tasks = [];
    masterPList.set(ICP, newP);
    repopulateProjects();
    TDProject.value = "";
}

//repopulates projects on the html page
export function repopulateProjects(){

    projectSection.innerHTML = "";
    addToProject.innerHTML = "";
    let blankSection = document.createElement("option");
    blankSection.textContent = "";
    addToProject.appendChild(blankSection);
    masterPList.forEach((values, keys) => {
    let newProjectSection = document.createElement("div");
    newProjectSection.id = keys;
    newProjectSection.classList.add("projectLists");
    newProjectSection.innerHTML = values.name + "<p>" + "<p>" + values.tasks;
    projectSection.appendChild(newProjectSection);
    let projectOption = document.createElement("option");
    projectOption.textContent = values.name;
    projectOption.value = keys;
    projectOption.id = values.name;
    addToProject.appendChild(projectOption);
    let projectDelete = document.createElement("div")
    projectDelete.id = keys;
    projectDelete.innerHTML = "<button id =" + keys + ">Delete Project?</button>";
    projectDelete.addEventListener("click", e => deleteProject(e));
    newProjectSection.appendChild(projectDelete);
    });
    addLSP();
    }

//function that handles when a new todo is added to a project
export function addTasks (e) {
    e.preventDefault();
    let projectValue = parseInt(addToProject.value);
    let temp = masterPList.get(projectValue);
    let taskName = TDTitle.value;
    temp.tasks.push(taskName);
    masterPList.set(projectValue, temp);
    repopulateProjects();
}

//function that handles updating projects when a task is deleted
export function removeATask (e) {
    e.preventDefault();
    let projectValue = parseInt(e.target.parentElement.id);
    let taskValue = parseInt(e.target.id);
    let temp = masterPList.get(projectValue);
    temp.tasks.splice(taskValue, 1);
    masterPList.set(projectValue, temp);
    repopulateProjects(); 
}

//function that handles deleting projects
export function deleteProject(e) {
    e.preventDefault;
    let projectValue = parseInt(e.target.id);
    masterPList.delete(projectValue);
    repopulateProjects();
}