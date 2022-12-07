const recibeTask = () => {
  const taskInput = document.getElementById("taskInput");
  const addTask = document.getElementById("addTask");
  const taskList = [];

  addTask.addEventListener("click", () => {
    taskList.push(taskInput.value);
    generatedList(taskList);
    taskInput.value = "";
    counterTasks();
  });

};

const generatedList = (taskList) => {
  const taskContainer = document.getElementById("taskContainer");
  const lastTask = `
                <article class="task">
                    <div class="tasks__container__task">
                        <span class="tasks__container__task__circle">
                            <img class="hide imgPaloma" src="./images/icon-check.svg" alt="Check" class="checkSvg">
                        </span>
                        <p class="tasks__container__task__text">${taskList[taskList.length - 1]}
                        </p>
                    </div>
                    <picture>
                        <img class="tasks__container__task__delete" src="./images/icon-cross.svg" alt="Icon Cross">
                    </picture>
                </article>
                `;
    taskContainer.insertAdjacentHTML("afterbegin", lastTask);

};

recibeTask();

/*
PENDIENTES:
- Dark Side - Faltan los colores del texto y la inversion al crear una nueva lista
- Drag and Drop
*/
