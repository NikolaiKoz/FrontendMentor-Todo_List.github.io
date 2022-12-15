const checkTask = () => {
  const taskContainer = document.getElementById("taskContainer");

  taskContainer.addEventListener("click", () => {
    const checkTask = document.querySelectorAll(
      ".tasks__container__task__circle"
    );

    checkTask.forEach((task) => {
      task.addEventListener("click", () => {
        task.childNodes[1].classList.toggle("hide");
        task.classList.toggle("check");

        const darkSideBtn = document.getElementById("darkSide");

        if (darkSideBtn.src.includes("moon")) {
          task.parentElement.children[1].classList.toggle("text-light");
          task.parentElement.children[1].classList.toggle("checkText-light");
        } else {
          task.parentElement.children[1].classList.toggle("text-dark");
          task.parentElement.children[1].classList.toggle("checkText-dark");
        }

        const allTasks = JSON.parse(localStorage.getItem("tasks"));

        allTasks.forEach((taskLS) => {
          if (
            taskLS.text ===
            task.parentElement.childNodes[3].children[0].textContent
          ) {
            taskLS.checked = !taskLS.checked;

            localStorage.setItem("tasks", JSON.stringify(allTasks));
          }
        });
      });
    });
  });
};

checkTask();
