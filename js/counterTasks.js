const counterTasks = () => {

    const counter = document.getElementById("counterTasks");
    counter.innerHTML = `${document.querySelectorAll(".task").length} items left`;
};
counterTasks();