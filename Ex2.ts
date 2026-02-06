interface myInterface{
    myTasks:Array<string>             // Created an interface
    addTask(task:string):number;          // added functions to the interface
    listAllTasks():void;
    deleteTask(task:string):number;
}

class Tasks implements myInterface{     // class implements the interface
    constructor(){}

    myTasks: string[] = [];
  
    addTask(task: string): number {        // this method adds a string to the list
        this.myTasks.push(task);                             
        console.log(task + " was added to the list");                  
        return this.myTasks.length;            // this displays the length
    }   

    listAllTasks(): void{                   // this function lists everything in the array
        for (let i = 0; i <this.myTasks.length; i++){      // for loop looks through the list and prints everything
            console.log("Task: "+ this.myTasks[i] + " is on the task list");
        }
    }
    
    deleteTask(task: string): number {     // this function deletes a string from the array
        let index: number = this.myTasks.indexOf(task)     //saves the index of the  item to a variable

        if (index === -1){            // Chacks if string is on the list
            console.log(task + " is not on the list.")
        }
        else{
            this.myTasks.splice(index, 1);
            console.log(task+ " has been removed from the task list")     // string is removed
        }
        return this.myTasks.length;           // this displays the length of the list
    }

}
let myTodo = new Tasks();    // creates myTodo object to access functions
myTodo.addTask("Eat");
myTodo.listAllTasks();      
myTodo.addTask("Study");     
myTodo.listAllTasks();
myTodo.deleteTask("Study");
myTodo.listAllTasks();

