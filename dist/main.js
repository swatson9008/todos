(() => {
  "use strict";
  class e {
    constructor(e, t, o, n, l) {
      (this.title = e),
        (this.description = t),
        (this.dueDate = o),
        (this.priority = n),
        (this.project = l);
    }
  }
  class t {
    constructor(e, t, o) {
      (this.name = e), (this.tasks = o);
    }
  }
  let o = localStorage.getItem("indexCP"),
    n = new Map();
  function l() {
    (projectSection.innerHTML = ""), (addToProject.innerHTML = "");
    let e = document.createElement("option");
    (e.textContent = ""),
      addToProject.appendChild(e),
      n.forEach((e, t) => {
        let o = document.createElement("div");
        (o.id = t),
          o.classList.add("projectLists"),
          (o.innerHTML = e.name + "<p><p>" + e.tasks),
          projectSection.appendChild(o);
        let i = document.createElement("option");
        (i.textContent = e.name),
          (i.value = t),
          (i.id = e.name),
          addToProject.appendChild(i);
        let a = document.createElement("div");
        (a.id = t),
          (a.innerHTML = "<button id =" + t + ">Delete Project?</button>"),
          a.addEventListener("click", (e) =>
            (function (e) {
              e.preventDefault;
              let t = parseInt(e.target.id);
              n.delete(t), l();
            })(e)
          ),
          o.appendChild(a);
      }),
      (localStorage.mlp = JSON.stringify(Array.from(n))),
      console.log(localStorage.mlp);
  }
  !(function () {
    let e;
    null !== localStorage.getItem("mlp") &&
      (e = new Map(JSON.parse(localStorage.mlp))),
      (n = void 0 === e ? new Map() : e),
      l();
  })();
  let i = localStorage.getItem("indexC"),
    a = new Map();
  function c() {
    (toDoSection.innerHTML = ""),
      a.forEach((e, t) => {
        let o = document.createElement("div");
        (o.id = t),
          o.classList.add("ToDoListing"),
          (o.innerHTML =
            e.title +
            "<p>" +
            e.description +
            "<p>" +
            e.dueDate +
            "<p>" +
            e.priority),
          toDoSection.appendChild(o);
        let i = document.createElement("div");
        i.classList.add("PriorityBtn"),
          (i.innerHTML = priorityOptions.innerHTML),
          (i.id = t),
          i.addEventListener("change", (e) =>
            (function (e) {
              e.preventDefault();
              let t = e.target.value,
                o = parseInt(e.target.parentElement.id);
              console.log(o),
                a.set(o, { ...a.get(o), priority: t }),
                console.log(a),
                c();
            })(e)
          ),
          o.appendChild(i);
        let d = document.createElement("div");
        d.classList.add("deleteToDoBtn"),
          (d.id = e.project),
          (d.innerHTML = "<button id =" + t + ">Delete Task?</button>"),
          d.addEventListener("click", (e) => {
            (function (e) {
              let t = parseInt(e.target.id);
              a.delete(t), c();
            })(e),
              (function (e) {
                e.preventDefault();
                let t = parseInt(e.target.parentElement.id),
                  o = parseInt(e.target.id),
                  i = n.get(t);
                i.tasks.splice(o, 1), n.set(t, i), console.log(n), l();
              })(e);
          }),
          o.appendChild(d);
      }),
      (localStorage.MLToDo = JSON.stringify(Array.from(a))),
      console.log(localStorage.MLToDo);
  }
  !(function () {
    let e;
    null !== localStorage.getItem("MLToDo") &&
      (e = new Map(JSON.parse(localStorage.MLToDo))),
      (a = void 0 === e ? new Map() : e),
      c();
  })();
  let d = document.getElementById("submitB"),
    r =
      (document.getElementById("TDTitle"),
      document.getElementById("TDDescrip"),
      document.getElementById("TDDueDate"),
      document.getElementById("TDPriority"),
      document.getElementById("checkLogs"),
      document.getElementById("submitP"));
  document.getElementById("TDProject"),
    document.getElementById("toDoSection"),
    document.getElementById("projectSection"),
    document.getElementById("priorityOptions"),
    document.getElementById("deleteToDoBtn"),
    document.getElementById("addToProject"),
    d.addEventListener("click", (t) => {
      (function (t) {
        t.preventDefault(),
          Number.isNaN(i) ? (i = 0) : ++i,
          console.log(i),
          localStorage.setItem("indexC", i);
        let o = new e();
        (o.title = TDTitle.value),
          (o.description = TDDescrip.value),
          (o.dueDate = TDDueDate.value),
          (o.priority = TDPriority.value),
          (o.project = addToProject.value),
          a.set(i, o),
          console.log(a),
          console.log(addToProject.value),
          c();
      })(t),
        (function (e) {
          e.preventDefault();
          let t = parseInt(addToProject.value),
            o = n.get(t),
            i = TDTitle.value;
          o.tasks.push(i), console.log(o), n.set(t, o), console.log(n), l();
        })(t);
    }),
    r.addEventListener("click", (e) =>
      (function (e) {
        e.preventDefault(),
          Number.isNaN(o) ? (o = 0) : ++o,
          console.log(o),
          localStorage.setItem("indexCP", o);
        let i = new t();
        (i.name = TDProject.value),
          (i.tasks = []),
          n.set(o, i),
          console.log(n),
          l(),
          (TDProject.value = "");
      })(e)
    );
})();