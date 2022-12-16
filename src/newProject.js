


export default function createNewProject (e) {
    e.preventDefault();
    let newProject = document.createElement("div");
    newProject.id = TDProject.value;
    newProject.classList.add("projectLists");
    projectSection.appendChild(newProject);
}