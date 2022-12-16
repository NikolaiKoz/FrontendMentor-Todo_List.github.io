const clearCompletedTasks = () => {

    const btn = document.getElementById("clearAllTasks");

    btn.addEventListener("click", () => {
        const task = document.querySelectorAll(".task");
        task.forEach((task) => {
            if (task.childNodes[1].childNodes[1].classList.contains("check")) {
                const allTasks = JSON.parse(localStorage.getItem("tasks"));
                allTasks.forEach((taskLS) => {
                    if (taskLS.text === task.childNodes[1].childNodes[3].childNodes[1].textContent) {
                        const index = allTasks.indexOf(taskLS);
                        allTasks.splice(index, 1);
                        localStorage.setItem("tasks", JSON.stringify(allTasks));
                    }
                });
                task.remove();
            }
        });
    });

};
clearCompletedTasks();