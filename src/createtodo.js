
let indexCounter = 0;

const masterList = new Map();



export default class toDoCreate {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}



const secondExample = new toDoCreate ("Sweep Floors", "Clean floors", "Tomorrow", "Low");





export function createNewToDo (e){
    e.preventDefault();
    const exampleTodo = new toDoCreate ("Do dishes", "Clean dishes", "Tonight", "High");
    masterList.set(exampleTodo, indexCounter);
    indexCounter++;
    console.log(masterList);
    console.log(indexCounter);
}


/*function looper (){

for (let v = 0; v < toDoCreate.length; v++){
    console.log(toDoCreate[v]);
}};

console.log(looper())*/