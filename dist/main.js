(()=>{"use strict";class e{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}}class t{constructor(e,t,n){this.name=e,this.tasks=n}}let n=new Map,o=0;function i(){projectSection.innerHTML="",n.forEach(((e,t)=>{let n=document.createElement("div");n.id=t,n.classList.add("projectLists"),n.innerHTML=e.name+"<p><p>"+e.tasks,projectSection.appendChild(n);let o=document.createElement("option");o.textContent=e.name,o.value=t,o.id=e.name,addToProject.appendChild(o)}))}let d=0;const l=new Map;function c(){toDoSection.innerHTML="",l.forEach(((e,t)=>{let n=document.createElement("div");n.id=t,n.classList.add("ToDoListing"),n.innerHTML=e.title+"<p>"+e.description+"<p>"+e.dueDate+"<p>"+e.priority,toDoSection.appendChild(n);let o=document.createElement("div");o.classList.add("PriorityBtn"),o.innerHTML=priorityOptions.innerHTML,o.id=t,o.addEventListener("change",(e=>function(e){e.preventDefault();let t=e.target.value,n=parseInt(e.target.parentElement.id);console.log(n),l.set(n,{...l.get(n),priority:t}),console.log(l),c()}(e))),n.appendChild(o);let i=document.createElement("div");i.classList.add("deleteToDoBtn"),i.id=t,i.innerHTML="<button id ="+i.id+">Delete Task?</button>",i.addEventListener("click",(e=>function(e){e.preventDefault();let t=e.target.id;console.log(t)}(e))),n.appendChild(i)}))}let a=document.getElementById("submitB"),r=(document.getElementById("TDTitle"),document.getElementById("TDDescrip"),document.getElementById("TDDueDate"),document.getElementById("TDPriority"),document.getElementById("checkLogs"),document.getElementById("submitP"));document.getElementById("TDProject"),document.getElementById("toDoSection"),document.getElementById("projectSection"),document.getElementById("priorityOptions"),document.getElementById("deleteToDoBtn"),document.getElementById("addToProject"),a.addEventListener("click",(t=>{(function(t){t.preventDefault();let n=new e;n.title=TDTitle.value,n.description=TDDescrip.value,n.dueDate=TDDueDate.value,n.priority=TDPriority.value,l.set(d,n),console.log(l),d++,c()})(t),function(e){e.preventDefault();let t=parseInt(addToProject.value),o=n.get(t),d=TDTitle.value;o.tasks.push(d),console.log(o),n.set(t,o),console.log(n),i()}(t)})),r.addEventListener("click",(e=>function(e){e.preventDefault();let d=new t;d.name=TDProject.value,d.tasks=[],n.set(o,d),o++,console.log(n),i(),TDProject.value=""}(e)))})();