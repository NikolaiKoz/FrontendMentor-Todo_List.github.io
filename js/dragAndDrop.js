const dragAndDrop = () => {

    const taskContainer = document.getElementById("taskContainer");

    Sortable.create(taskContainer, {
        animation: 150,
        ghostClass: 'blue-background-class',

        onEnd: function () {

            const task = {
                checked: false,
                text: 'Task 1',
            };

            const allTasks = [];

            const taskList = document.querySelectorAll(".task");

            taskList.forEach((taskList) => {

                const taskText = taskList.querySelector(".tasks__container__task__text").innerText;
                const taskChecked = taskList.querySelector(".tasks__container__task__circle").classList.contains("check");

                const newTask = Object.create(task);

                newTask.checked = taskChecked;
                newTask.text = taskText;
                allTasks.push(newTask);

            });

            allTasks.reverse()

            localStorage.setItem('tasks', JSON.stringify(allTasks));
        }
    });

};
dragAndDrop();