let inputValue = [];
function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function addTask() {
    var id = createUUID();
    const data = JSON.parse(localStorage.getItem('inputText'));
    let inputText = document.getElementById("input");
    if (inputText.value == '') {
        alert("Please enter a task");
    } else {
        let value = inputText.value;
        var obj = {
            id: id,
            textData: value,
            taskDone: '',
        }
        if (data == null) {
            inputValue = [];
        } else {
            inputValue = data;
        }
        inputValue.push(obj);
        localStorage.setItem('inputText', JSON.stringify(inputValue));
        displayTask(inputValue);
    }
}
function displayTask() {
    const data = JSON.parse(localStorage.getItem('inputText'));
    var table = document.getElementById("list");
    table.innerHTML = '';
    data.forEach(element => {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        cell1.innerHTML = element.textData;
        if (element.taskDone == "Save Task") {
            cell2.innerHTML = '<button id="button" name="\'' + element.taskDone + '\'" onclick="SaveTask(\'' + element.id + '\')" style="background-color:green;">Done</button>';
        } else {
            cell2.innerHTML = '<button id="button" name="\'' + element.taskDone + '\'" onclick="SaveTask(\'' + element.id + '\')">Save</button>';
        }
        cell3.innerHTML = '<button onclick="deleteTask(this)">Delete</button>';
    });
}
function SaveTask(id) {
    const data = JSON.parse(localStorage.getItem('inputText'));
    var filterData = data.findIndex((obj) => obj.id == id);
    data[filterData].taskDone = 'Save Task';
    if (data[filterData].taskDone == "Save Task") {
        localStorage.setItem('inputText', JSON.stringify(data));
    }

    localStorage.setItem('inputText', JSON.stringify(data));
    displayTask()
}
function deleteTask(id) {
    const data = JSON.parse(localStorage.getItem('inputText'));
    var filterData = data.findIndex((obj) => obj.id == id);
    data.splice(filterData, 1);
    localStorage.setItem('inputText', JSON.stringify(data));
    displayTask()
}

displayTask();

// let inputValue = [];

// // DOM elements
// const inputText = document.getElementById("input");
// const table = document.getElementById("list");

// // Add event listener to the parent table for efficient event delegation
// table.addEventListener("click", handleButtonClick);

// // Load and display tasks on page load
// loadTasks();

// function createUUID() {
//     return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//         const r = (Math.random() * 16) | 0;
//         const v = c === "x" ? r : (r & 0x3) | 0x8;
//         return v.toString(16);
//     });
// }

// function handleButtonClick(event) {
//     const target = event.target;
//     if (target.tagName === "BUTTON") {
//         const taskId = target.dataset.taskId;
//         if (target.classList.contains("save-button")) {
//             saveTask(taskId);
//         } else if (target.classList.contains("delete-button")) {
//             deleteTask(taskId);
//         }
//     }
// }

// function addTask() {
//     if (inputText.value === "") {
//         alert("Please enter a task");
//         return;
//     }

//     const id = createUUID();
//     const value = inputText.value;
//     const task = {
//         id: id,
//         textData: value,
//         taskDone: "",
//     };

//     inputValue.push(task);
//     saveTasksToLocalStorage();
//     displayTask(task);
//     inputText.value = "";
// }

// function loadTasks() {
//     const storedData = localStorage.getItem("inputText");
//     inputValue = storedData ? JSON.parse(storedData) : [];
//     displayTask();
// }

// function saveTasksToLocalStorage() {
//     localStorage.setItem("inputText", JSON.stringify(inputValue));
// }

// function saveTask(id) {
//     const task = inputValue.find((task) => task.id === id);
//     if (task) {
//         if (task.taskDone === "Save Task") {
//             task.taskDone = "";
//         } else {
//             task.taskDone = "Save Task";
//         }
//         saveTasksToLocalStorage();
//         displayTask(task);
//     }
// }

// function deleteTask(id) {
//     const index = inputValue.findIndex((task) => task.id === id);
//     if (index !== -1) {
//         inputValue.splice(index, 1);
//         saveTasksToLocalStorage();
//         displayTask();
//     }
// }

// function displayTask() {
//     table.innerHTML = "";
//     inputValue.forEach((task) => {
//         const row = table.insertRow();
//         const cell1 = row.insertCell();
//         const cell2 = row.insertCell();
//         const cell3 = row.insertCell();
//         cell1.innerHTML = task.textData;
//         const saveButton = document.createElement("button");
//         saveButton.textContent = "Save";
//         saveButton.dataset.taskId = task.id;
//         saveButton.classList.add("save-button");
//         if (task.taskDone === "Save Task") {
//             saveButton.style.backgroundColor = "green";
//             saveButton.textContent = "Done";
//         }
//         cell2.appendChild(saveButton);

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.dataset.taskId = task.id;
//         deleteButton.classList.add("delete-button");
//         cell3.appendChild(deleteButton);
//     });
// }
