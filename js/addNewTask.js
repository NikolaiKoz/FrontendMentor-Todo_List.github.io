const addNewTask = () => {
  const addTaskBtn = document.getElementById("addTask");
  const inputTask = document.getElementById("taskInput");
  const taskContainer = document.getElementById("taskContainer");

  const addTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    let lastInput = tasks[tasks.length - 1];

    let taskCard = "";

    const darkSideBtn = document.getElementById("darkSide");
    if (darkSideBtn.src.includes("sun")) {
      taskCard = `
      <article class="task bb-dark">
          <div class="tasks__container__task">
              <span class="tasks__container__task__circle">
                  <img class="imgPaloma hide" src="./images/icon-check.svg" alt="Check" class="checkSvg">
              </span>
              <div class="tasks__container__task text-dark">
              <p class="tasks__container__task__text">${lastInput.text}</p>
              </div>
          <picture>
              <img class="tasks__container__task__delete" src="./images/icon-cross.svg" alt="Icon Cross">
          </picture>
      </article>
`;
    } else {
      taskCard = `
      <article class="task bb-light">
          <div class="tasks__container__task">
              <span class="tasks__container__task__circle">
                  <img class="imgPaloma hide" src="./images/icon-check.svg" alt="Check" class="checkSvg">
              </span>
              <div class="tasks__container__task text-light">
              <p class="tasks__container__task__text">${lastInput.text}</p>
              </div>
          <picture>
              <img class="tasks__container__task__delete" src="./images/icon-cross.svg" alt="Icon Cross">
          </picture>
      </article>
`;
    }

    taskContainer.insertAdjacentHTML("afterbegin", taskCard);

    counterTasks();
  };

  addTaskBtn.addEventListener("click", () => {
    addTask();
  });

  inputTask.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
};
addNewTask();
