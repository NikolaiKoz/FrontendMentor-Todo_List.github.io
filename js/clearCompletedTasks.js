const clearCompletedTasks = () => {

    const btn = document.getElementById("clearAllTasks");

    btn.addEventListener("click", () => {
        const task = document.querySelectorAll(".task");
        task.forEach((task) => {
            if (task.childNodes[1].childNodes[1].classList.contains("check")) {
                task.remove();
            }
        });
    });

};
clearCompletedTasks();