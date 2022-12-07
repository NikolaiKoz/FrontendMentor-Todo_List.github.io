const completedTasks = () => {

    const btn = document.getElementById("completedTasks");

    btn.addEventListener("click", () => {
        const tasks = document.querySelectorAll(".task");
        tasks.forEach(task => {
            if (task.childNodes[1].childNodes[1].classList.contains("check")) {
                task.classList.remove("hide");
            } else {
                task.classList.add("hide");
            }
        });
        document.getElementById("allTasks").classList.remove("select");
        document.getElementById("activeTasks").classList.remove("select");

        btn.classList.add("select");
    });
};
completedTasks();