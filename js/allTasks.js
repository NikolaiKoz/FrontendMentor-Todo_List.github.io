const showAllTasks = () => {

    const btn = document.getElementById("allTasks");

    btn.addEventListener("click", () => {
        const tasks = document.querySelectorAll(".task");
        tasks.forEach(task => {
            task.classList.remove("hide");
        });
        document.getElementById("activeTasks").classList.remove("select");
        document.getElementById("completedTasks").classList.remove("select");

        btn.classList.add("select");
    });
};
showAllTasks();