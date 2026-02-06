var Tasks = /** @class */ (function () {
    function Tasks() {
        this.myTasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        this.myTasks.push(task);
        console.log(task + " was added to the list");
        return this.myTasks.length; // this displays the length
    };
    Tasks.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myTasks.length; i++) { // for loop looks through the list and prints everything
            console.log("Task: " + this.myTasks[i] + " is on the task list");
        }
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task); //saves the index of the  item to a variable
        if (index === -1) { // Chacks if string is on the list
            console.log(task + " is not on the list.");
        }
        else {
            this.myTasks.splice(index, 1);
            console.log(task + " has been removed from the task list"); // string is removed
        }
        return this.myTasks.length; // this displays the length of the list
    };
    return Tasks;
}());
var myTodo = new Tasks(); // creates myTodo object to access functions
myTodo.addTask("Eat");
myTodo.listAllTasks();
myTodo.addTask("Study");
myTodo.listAllTasks();
myTodo.deleteTask("Study");
myTodo.listAllTasks();
