// Building on your growing knowledge of JavaScript create Task and TaskManager classes
// such that the following code will run using node.js. Tasks will have id, description and status properties.

// Freezing means no other statuses can be added to the object.
const TaskStatus = Object.freeze({
  NEW: 0,
  COMPLETE: 1,
});

class Task {
  static id_count = 0; // static attribute belongs to the class, so we can assign a unique id to each instance by incrementing this.
  constructor(description) {
    this.id = Task.id_count;
    this.description = description;
    this.completed = TaskStatus.NEW;
    Task.id_count++;
  }
}

class TaskManager {
  constructor() {
    this.tasks = new Array();
  }

  addTask(description) {
    // Push appends to the array
    this.tasks.push(new Task(description));
  }

  listTasks() {
    console.log(this.tasks);
  }

  // Using a try catch here to catch if we try to access a non existant index.
  completeTask(index) {
    try {
      this.tasks[index].completed = TaskStatus.COMPLETE;
    } catch {
      console.log("Error completing task: Task not found");
    }
  }

  deleteTask(index) {
    // Splice can also be used to insert an element.
    // Here we're just saying delete one element from the array, starting at point index
    // Haven't added a try catch as testing it revealed splicing out of range does not raise an error
    // Could potentially add a length check and log an error based on that.
    this.tasks.splice(index, 1);
  }

  filterTasks(filterFunction) {
    // Arrow function provided, we can just pass it in to the filter method
    // This checks returns an array of elements that evaluate the filter function as true.
    return this.tasks.filter(filterFunction);
  }
}

// Create a new task manager
const taskManager = new TaskManager();
// // Add tasks
taskManager.addTask("Buy groceries");
taskManager.addTask("Read a book");
taskManager.addTask("Write code");
// // List tasks
taskManager.listTasks(); // Should display all tasks
// // Mark a task as completed
taskManager.completeTask(1);
// // Delete a task
taskManager.deleteTask(2);
// // Filter completed tasks
const completedTasks = taskManager.filterTasks((task) => task.completed);
console.log(completedTasks);
