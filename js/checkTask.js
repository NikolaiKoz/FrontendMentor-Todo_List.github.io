const checkTask = () => {

    const taskContainer = document.getElementById("taskContainer");

    taskContainer.addEventListener("click", () => {

        const checkTask = document.querySelectorAll(".tasks__container__task__circle");

        checkTask.forEach((task) => {
            task.addEventListener("click", () => {
                task.childNodes[1].classList.toggle("hide");
                task.parentElement.classList.toggle("checkText");
                task.classList.toggle("check");
            });
        }
        );
    });
};
checkTask();