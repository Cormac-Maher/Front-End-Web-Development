// part a
let myTasks:string[]=[];         // Creates array of strings
// part b
let addTask = (task:string):number=>{          // function that takes string as an input

    myTasks.push(task);                                    // b part 2
    console.log(task + " was added to the list");                    // b part 3
    console.log("Number of elements in array: ", myTasks.length);  // b part 4
}


// part c
function listAllTasks():void{          // function that takes string as an input

    for (let i = 0; i < myTasks.length; i++)    // loops throught the list 
    {
        console.log("Task: " + myTasks[i] + " is in the list");       // prints item on the list           
    }
}

// part d
function deleteTask(task:string):number    // delete task function
{         
    let index:number = myTasks.indexOf(task);            //saves the index of the  item to a variable

    if(index === -1){
        console.log(task + " was not on the list")           // Chacks if string is on the list
    }
    else{
        myTasks.splice(index,1);
        console.log(task + " has been removed from my Tasks list.")      // remoev item and logs it
    }
    return myTasks.length;
}

addTask("Eat")
addTask("Study")
listAllTasks()
addTask("Workout")          // accessing functions
listAllTasks()
deleteTask("Workout")
listAllTasks()