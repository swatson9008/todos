import { masterList } from "./createtodo";

import projectCreate from "./projectClass";

export let masterPList = new Map();

export let projectCounter = 0;



export default function createNewProject (e) {
    e.preventDefault();
    /*let newProject = document.createElement("div");
    newProject.id = TDProject.value;
    newProject.classList.add("projectLists");
    projectSection.appendChild(newProject);*/
    let newP = new projectCreate;
    newP.name = TDProject.value;
    newP.tasks = [];
    masterPList.set(projectCounter, newP);
    projectCounter++;
    console.log(masterPList);
    repopulateProjects();
    

}

export function repopulateProjects(){

    projectSection.innerHTML = "";
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
    /*let addTask = document.createElement("div");
    addTask.id = keys;
    addTask.innerHTML = */
    });
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
    let taskValue = e.target.id;
    console.log(taskValue);
}