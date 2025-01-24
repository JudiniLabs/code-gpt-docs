---
sidebar_position: 3
---
# Refactoring Legacy Code to Updated Code (ES6+)

CodeGPT features like /Refactor can help refactor the code using modern practices, SOLID principles, and better patterns. Here's the improved version with detailed explanations, for example, converting Legacy Code on Javascript ES5 to  JavaScript (ES6+):

## Example with Javascript ES5 legacy code:

# Refactorización de Código Legacy a Código Actualizado (ES6+)

```javascript

// Código Legacy (ES5)
function TodoApp() {
    this.tasks = [];
    this.taskInput = document.getElementById('taskInput');
    this.taskList = document.getElementById('taskList');
    this.addButton = document.getElementById('addButton');

    this.addButton.onclick = this.addTask.bind(this);
}

TodoApp.prototype.addTask = function() {
    var taskText = this.taskInput.value;
    if (taskText) {
        this.tasks.push(taskText);
        this.renderTasks();
        this.taskInput.value = '';
    }
};

TodoApp.prototype.renderTasks = function() {
    this.taskList.innerHTML = '';
    for (var i = 0; i < this.tasks.length; i++) {
        var li = document.createElement('li');
        li.textContent = this.tasks[i];
        this.taskList.appendChild(li);
    }
};

window.onload = function() {
    new TodoApp();
};
```

## Using `Refactor` command
- Go to VSCode Extension
- Pick a Model or agent that has the `Refactor` feature. Please refer to the [Refactoring(https://docs.codegpt.co/docs/tutorial-features/code_refactoring) section to learn more information.
- Write slash `/` and choose `Refactor` command
- wait the response

## Example response of Claude 3.5 Sonnet V2

I'll help refactor the code using modern JavaScript (ES6+) practices, SOLID principles, and better patterns. Here's the improved version with detailed explanations:

```javascript
// TodoApp Class using ES6+ syntax
class TodoApp {
    #tasks = [];
    #elements = {};

    constructor() {
        this.#initializeElements();
        this.#bindEvents();
    }

    // Private method to initialize DOM elements
    #initializeElements() {
        this.#elements = {
            taskInput: document.getElementById('taskInput'),
            taskList: document.getElementById('taskList'),
            addButton: document.getElementById('addButton')
        };

        // Validate required elements exist
        Object.entries(this.#elements).forEach(([key, element]) => {
            if (!element) {
                throw new Error(`Required element "${key}" not found`);
            }
        });
    }

    // Private method to bind event listeners
    #bindEvents() {
        this.#elements.addButton.addEventListener('click', () => this.addTask());
        this.#elements.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
    }

    // Public method to add a task
    addTask() {
        const taskText = this.#elements.taskInput.value.trim();
        
        if (!this.#isValidTask(taskText)) return;

        this.#tasks.push({
            id: Date.now(),
            text: taskText,
            completed: false
        });

        this.#clearInput();
        this.renderTasks();
    }

    // Private method to validate task
    #isValidTask(taskText) {
        return taskText.length > 0;
    }

    // Private method to clear input
    #clearInput() {
        this.#elements.taskInput.value = '';
        this.#elements.taskInput.focus();
    }

    // Public method to render tasks
    renderTasks() {
        const taskElements = this.#tasks.map(task => this.#createTaskElement(task));
        
        this.#elements.taskList.innerHTML = '';
        this.#elements.taskList.append(...taskElements);
    }

    // Private method to create task element
    #createTaskElement(task) {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        li.className = 'task-item';
        
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        
        const deleteButton = this.#createDeleteButton(task.id);
        
        li.append(taskText, deleteButton);
        return li;
    }

    // Private method to create delete button
    #createDeleteButton(taskId) {
        const button = document.createElement('button');
        button.textContent = '×';
        button.className = 'delete-btn';
        button.addEventListener('click', () => this.#deleteTask(taskId));
        return button;
    }

    // Private method to delete task
    #deleteTask(taskId) {
        this.#tasks = this.#tasks.filter(task => task.id !== taskId);
        this.renderTasks();
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        new TodoApp();
    } catch (error) {
        console.error('Failed to initialize TodoApp:', error);
    }
});



Css
Insert code

/* Suggested minimal CSS */
.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin: 4px 0;
}

.delete-btn {
    margin-left: 8px;
    cursor: pointer;
}

```
### 1. Key improvements made:

### SOLID Principles:

- Single Responsibility: Methods are small and focused
- Private methods using # prefix for better encapsulation
- Clear separation of concerns

### 2. Modern JavaScript Features:
- ES6 Class syntax
- Private fields and methods
- Arrow functions
- Template literals
- Array methods (map, filter)

### 3. Enhanced Functionality:
- Added error handling
- Input validation
- Task deletion capability
- Enter key support
- Unique IDs for tasks
- Better task structure (object instead of just string)

### 4. Better Organization:
- Grouped related elements in a private object
- Separated DOM manipulation logic
- Clear method naming
- Consistent code style
### 5. Improved UX:
- Input focus after adding task
- Input trimming
- Delete buttons for tasks
- Better event handling

### 6. Error Handling:
- Validation of required DOM elements
- Try-catch for initialization
- Input validation

### 7. Maintainability:
- Clear code structure
- Documentation comments
- Consistent naming conventions
### 8. Modular design
To use this code, you'll need the following HTML structure:

```html
<div class="todo-app">
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button id="addButton">Add Task</button>
    <ul id="taskList"></ul>
</div>
```
This refactored version is more robust, maintainable, and follows modern JavaScript best practices while maintaining the original functionality and adding useful features.

