export let ICP = localStorage.getItem("indexCP");

export function checkCounterP () {
  if(Number.isNaN(ICP)){
    ICP=0;
  } else {
    ++ICP;
  }

console.log(ICP);

localStorage.setItem("indexCP", ICP);
  return ICP;
}



import { masterList } from "./createtodo";

import projectCreate from "./projectClass";

import { taskdelete } from "./createtodo";

//export let projectCounter = 0;

export let masterPList = new Map();



export function checkMapPList () {
    let masterLP = new Map(JSON.parse(localStorage.mlp));
    if (masterLP === ""){masterPList === new Map()}
    else {masterPList = masterLP}
    repopulateProjects()

}

export function addLSP () {
    localStorage.mlp = JSON.stringify(Array.from(masterPList));
    console.log(localStorage.mlp);
}

checkMapPList();




export default function createNewProject (e) {
    e.preventDefault();
    checkCounterP();
    /*let newProject = document.createElement("div");
    newProject.id = TDProject.value;
    newProject.classList.add("projectLists");
    projectSection.appendChild(newProject);*/
    let newP = new projectCreate;
    newP.name = TDProject.value;
    newP.tasks = [];
    masterPList.set(ICP, newP);
    console.log(masterPList);
    repopulateProjects();
    TDProject.value = "";
    

}

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
    /*let addTask = document.createElement("div");
    addTask.id = keys;
    addTask.innerHTML = */
    });
    addLSP();
    }

export function addTasks (e) {
    e.preventDefault();
    let projectValue = parseInt(addToProject.value);
    let temp = masterPList.get(projectValue);
    let taskName = TDTitle.value;
    temp.tasks.push(taskName);
    console.log(temp);
    masterPList.set(projectValue, temp);
    console.log(masterPList);
    repopulateProjects();
}

export function removeATask (e) {
    e.preventDefault();
    let projectValue = parseInt(e.target.parentElement.id);
    let taskValue = parseInt(e.target.id);
    let temp = masterPList.get(projectValue);
    temp.tasks.splice(taskValue, 1);
    masterPList.set(projectValue, temp);
    console.log(masterPList);
    repopulateProjects();
    
    
}

export function deleteProject(e) {
    e.preventDefault;
    let projectValue = parseInt(e.target.id);
    masterPList.delete(projectValue);
    repopulateProjects();
}