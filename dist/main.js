(()=>{"use strict";class e{constructor(e,t,n,o,l){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.project=l}}class t{constructor(e,t,n){this.name=e,this.tasks=n}}let n=localStorage.getItem("indexCP"),o=new Map;function l(){projectSection.innerHTML="",addToProject.innerHTML="";let e=document.createElement("option");e.textContent="",addToProject.appendChild(e),o.forEach(((e,t)=>{let n=document.createElement("div");n.id=t,n.classList.add("projectLists"),n.innerHTML=e.name+"<p><p>"+e.tasks,projectSection.appendChild(n);let i=document.createElement("option");i.textContent=e.name,i.value=t,i.id=e.name,addToProject.appendChild(i);let a=document.createElement("div");a.id=t,a.innerHTML="<button id ="+t+">Delete Project?</button>",a.addEventListener("click",(e=>function(e){e.preventDefault;let t=parseInt(e.target.id);o.delete(t),l()}(e))),n.appendChild(a)})),localStorage.mlp=JSON.stringify(Array.from(o)),console.log(localStorage.mlp)}!function(){let e=new Map(JSON.parse(localStorage.mlp));""===e?new Map:o=e,l()}();let i=localStorage.getItem("indexC"),a=new Map;function c(){toDoSection.innerHTML="",a.forEach(((e,t)=>{let n=document.createElement("div");n.id=t,n.classList.add("ToDoListing"),n.innerHTML=e.title+"<p>"+e.description+"<p>"+e.dueDate+"<p>"+e.priority,toDoSection.appendChild(n);let i=document.createElement("div");i.classList.add("PriorityBtn"),i.innerHTML=priorityOptions.innerHTML,i.id=t,i.addEventListener("change",(e=>function(e){e.preventDefault();let t=e.target.value,n=parseInt(e.target.parentElement.id);console.log(n),a.set(n,{...a.get(n),priority:t}),console.log(a),c()}(e))),n.appendChild(i);let d=document.createElement("div");d.classList.add("deleteToDoBtn"),d.id=e.project,d.innerHTML="<button id ="+t+">Delete Task?</button>",d.addEventListener("click",(e=>{(function(e){let t=parseInt(e.target.id);a.delete(t),c()})(e),function(e){e.preventDefault();let t=parseInt(e.target.parentElement.id),n=parseInt(e.target.id),i=o.get(t);i.tasks.splice(n,1),o.set(t,i),console.log(o),l()}(e)})),n.appendChild(d)})),localStorage.MLToDo=JSON.stringify(Array.from(a)),console.log(localStorage.MLToDo)}!function(){let e=new Map(JSON.parse(localStorage.MLToDo));""===e?new Map:a=e,c()}();let d=document.getElementById("submitB"),r=(document.getElementById("TDTitle"),document.getElementById("TDDescrip"),document.getElementById("TDDueDate"),document.getElementById("TDPriority"),document.getElementById("checkLogs"),document.getElementById("submitP"));document.getElementById("TDProject"),document.getElementById("toDoSection"),document.getElementById("projectSection"),document.getElementById("priorityOptions"),document.getElementById("deleteToDoBtn"),document.getElementById("addToProject"),d.addEventListener("click",(t=>{(function(t){t.preventDefault(),Number.isNaN(i)?i=0:++i,console.log(i),localStorage.setItem("indexC",i);let n=new e;n.title=TDTitle.value,n.description=TDDescrip.value,n.dueDate=TDDueDate.value,n.priority=TDPriority.value,n.project=addToProject.value,a.set(i,n),console.log(a),console.log(addToProject.value),c()})(t),function(e){e.preventDefault();let t=parseInt(addToProject.value),n=o.get(t),i=TDTitle.value;n.tasks.push(i),console.log(n),o.set(t,n),console.log(o),l()}(t)})),r.addEventListener("click",(e=>function(e){e.preventDefault(),Number.isNaN(n)?n=0:++n,console.log(n),localStorage.setItem("indexCP",n);let i=new t;i.name=TDProject.value,i.tasks=[],o.set(n,i),console.log(o),l(),TDProject.value=""}(e)))})();