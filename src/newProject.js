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





export function checkMapPList() {
    let storage = localStorage.getItem('mlp') // set 'storage' to whatever the contents of 'mlp' is
    let masterLP; // create a new variable
    //if that storage ISN'T null, set the value of masterLP
    if(storage !== null) masterLP = new Map(JSON.parse(localStorage.mlp));
  
    //if masterLP is still undefined, set masterPList to a new map like it seemed like you wanted
    if (masterLP === undefined) {
      //in your original code you wrote: masterPList === new Map()
      masterPList = new Map()
    } else {
      // else set value of masterPList to masterLP
      masterPList = masterLP
    }
  
    // repopulate projects
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