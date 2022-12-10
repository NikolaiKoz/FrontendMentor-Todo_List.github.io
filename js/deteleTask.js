const deleteTask = () => {

    const taskContainer = document.getElementById("taskContainer");

    taskContainer.addEventListener("pointerover", () => {

        const deleteTask = document.querySelectorAll(".tasks__container__task__delete");

        deleteTask.forEach((task) => {
            task.addEventListener("click", () => {
                task.parentNode.parentNode.remove();

                console.log(task.parentNode.parentElement.childNodes[1].childNodes[3].textContent);

                const allTasks = JSON.parse(localStorage.getItem("tasks"));

                allTasks.forEach((taskLS) => {
                     if (taskLS.text === task.parentNode.parentElement.childNodes[1].childNodes[3].textContent) {
                         const index = allTasks.indexOf(taskLS);
                         console.log(index);
                         allTasks.splice(index, 1);

                         localStorage.setItem("tasks", JSON.stringify(allTasks));
                     }
                 }
                 );
                counterTasks();
            });
        }
        );
    });

};
deleteTask();