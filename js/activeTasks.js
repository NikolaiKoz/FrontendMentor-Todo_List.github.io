const activeTasks = () => {

    const btn = document.getElementById("activeTasks");

    btn.addEventListener("click", () => {
        const tasks = document.querySelectorAll(".task");
        tasks.forEach(task => {
            if (task.childNodes[1].childNodes[1].classList.contains("check")) {
                task.classList.add("hide");
            } else {
                task.classList.remove("hide");
            }
        });
        document.getElementById("allTasks").classList.remove("select");
        document.getElementById("completedTasks").classList.remove("select");

        btn.classList.add("select");
    });
};
activeTasks();