
export let indexCounter = 0

const masterList = new Map();



export default class toDoCreate {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}


export function createNewToDo (e){
    e.preventDefault();
    let newTask = new toDoCreate;
    newTask.title = TDTitle.value;
    newTask.description = TDDescrip.value;
    newTask.dueDate = TDDueDate.value;
    newTask.priority = TDPriority.value;
    //const exampleTodo = new toDoCreate ("Do dishes", "Clean dishes", "Tonight", "High");
    masterList.set(newTask, indexCounter);
    indexCounter++
    console.log(masterList);
    console.log(TDTitle.value);

}

/*function looper (){

for (let v = 0; v < toDoCreate.length; v++){
    console.log(toDoCreate[v]);
}};

console.log(looper())*/