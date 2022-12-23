import { masterList } from "./createtodo";

import projectCreate from "./projectClass";

export let masterPList = new Map();

export let projectCounter = 1;

export function SampleP(){
    let SampleP = new projectCreate;
    SampleP.name = "Sample Project";
    SampleP.tasks = "No Tasks";
    masterPList.set (0, SampleP);
    repopulateProjects;
}

export default function createNewProject (e) {
    e.preventDefault();
    /*let newProject = document.createElement("div");
    newProject.id = TDProject.value;
    newProject.classList.add("projectLists");
    projectSection.appendChild(newProject);*/
    let newP = new projectCreate;
    newP.name = TDProject.value;
    newP.tasks = "No Tasks";
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
    /*let addTask = document.createElement("div");
    addTask.id = keys;
    addTask.innerHTML = */
    });



    }

