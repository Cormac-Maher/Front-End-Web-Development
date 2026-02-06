// part a
var myTasks = []; // Creates array of strings
// part b
var addTask = function (task) {
    myTasks.push(task); // b part 2
    console.log(task + " was added to the list"); // b part 3
    console.log("Number of elements in array: ", myTasks.length); // b part 4
};
// part c
function listAllTasks() {
    for (var i = 0; i < myTasks.length; i++) {
        console.log("Task: " + myTasks[i] + " is in the list");
    }
}
// part d
function DeleteTask(task) {
    var index = myTasks.indexOf(task);
    if (index === -1) {
        console.log(task + " was not on the list");
    }
    else {
        myTasks.splice(index, 1);
        console.log(task + " has been removed from my Tasks list.");
    }
    return myTasks.length;
}
addTask("Eat");
addTask("Study");
listAllTasks();
addTask("Workout");
listAllTasks();
DeleteTask("Workout");
listAllTasks();
