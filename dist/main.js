(()=>{"use strict";class e{constructor(e,t,n,o,i){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.project=i}}class t{constructor(e,t,n){this.name=e,this.tasks=n}}let n=new Map,o=0;function i(){projectSection.innerHTML="",addToProject.innerHTML="",n.forEach(((e,t)=>{let o=document.createElement("div");o.id=t,o.classList.add("projectLists"),o.innerHTML=e.name+"<p><p>"+e.tasks,projectSection.appendChild(o);let d=document.createElement("option");d.textContent=e.name,d.value=t,d.id=e.name,addToProject.appendChild(d);let l=document.createElement("div");l.id=t,l.innerHTML="<button id ="+t+">Delete Project?</button>",l.addEventListener("click",(e=>function(e){e.preventDefault;let t=parseInt(e.target.id);n.delete(t),i()}(e))),o.appendChild(l)}))}let d=0;const l=new Map;function c(){toDoSection.innerHTML="",l.forEach(((e,t)=>{let o=document.createElement("div");o.id=t,o.classList.add("ToDoListing"),o.innerHTML=e.title+"<p>"+e.description+"<p>"+e.dueDate+"<p>"+e.priority,toDoSection.appendChild(o);let d=document.createElement("div");d.classList.add("PriorityBtn"),d.innerHTML=priorityOptions.innerHTML,d.id=t,d.addEventListener("change",(e=>function(e){e.preventDefault();let t=e.target.value,n=parseInt(e.target.parentElement.id);console.log(n),l.set(n,{...l.get(n),priority:t}),console.log(l),c()}(e))),o.appendChild(d);let r=document.createElement("div");r.classList.add("deleteToDoBtn"),r.id=e.project,r.innerHTML="<button id ="+t+">Delete Task?</button>",r.addEventListener("click",(e=>{(function(e){let t=parseInt(e.target.id);l.delete(t),c()})(e),function(e){e.preventDefault();let t=parseInt(e.target.parentElement.id),o=parseInt(e.target.id),d=n.get(t);d.tasks.splice(o,1),n.set(t,d),console.log(n),i()}(e)})),o.appendChild(r)}))}let r=document.getElementById("submitB"),a=(document.getElementById("TDTitle"),document.getElementById("TDDescrip"),document.getElementById("TDDueDate"),document.getElementById("TDPriority"),document.getElementById("checkLogs"),document.getElementById("submitP"));document.getElementById("TDProject"),document.getElementById("toDoSection"),document.getElementById("projectSection"),document.getElementById("priorityOptions"),document.getElementById("deleteToDoBtn"),document.getElementById("addToProject"),r.addEventListener("click",(t=>{(function(t){t.preventDefault();let n=new e;n.title=TDTitle.value,n.description=TDDescrip.value,n.dueDate=TDDueDate.value,n.priority=TDPriority.value,n.project=addToProject.value,l.set(d,n),console.log(l),console.log(addToProject.value),d++,c()})(t),function(e){e.preventDefault();let t=parseInt(addToProject.value),o=n.get(t),d=TDTitle.value;o.tasks.push(d),console.log(o),n.set(t,o),console.log(n),i()}(t)})),a.addEventListener("click",(e=>function(e){e.preventDefault();let d=new t;d.name=TDProject.value,d.tasks=[],n.set(o,d),o++,console.log(n),i(),TDProject.value=""}(e)))})();