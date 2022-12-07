const deleteTask = () => {

    const taskContainer = document.getElementById("taskContainer");

    taskContainer.addEventListener("pointerover", () => {

        const deleteTask = document.querySelectorAll(".tasks__container__task__delete");

        deleteTask.forEach((task) => {
            task.addEventListener("click", () => {
                task.parentNode.parentNode.remove();
                counterTasks();
            });
        }
        );
    });

};
deleteTask();