const deleteTask = () => {
  const taskContainer = document.getElementById("taskContainer");

  taskContainer.addEventListener("pointerover", () => {
    const deleteTask = document.querySelectorAll(
      ".tasks__container__task__delete"
    );

    deleteTask.forEach((task) => {
      task.addEventListener("click", () => {
        const allTasksInDom = document.querySelectorAll(".task");

        allTasksInDom.forEach((taskDom) => {
          if (
            taskDom.children[0].children[1].children[0].textContent ===
            task.parentElement.parentElement.children[1].children[0].textContent
          ) {
            taskDom.remove();
          }
        });

        const allTasks = JSON.parse(localStorage.getItem("tasks"));

        allTasks.forEach((taskLS) => {
          if (
            taskLS.text ===
            task.parentElement.parentElement.children[1].children[0].textContent
          ) {
            const index = allTasks.indexOf(taskLS);
            allTasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(allTasks));
          }
        });
        counterTasks();
      });
    });
  });
};
deleteTask();
