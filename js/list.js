const recibeTask = () => {
  const taskInput = document.getElementById("taskInput");
  const addTask = document.getElementById("addTask");
  const taskList = [];

  addTask.addEventListener("click", () => {
    taskList.push(taskInput.value);
    generatedList(taskList);
    taskInput.value = "";
  });

};

const generatedList = (taskList) => {
  const taskContainer = document.getElementById("taskContainer");
  let lastTask = `
                <article class="task">
                    <div class="tasks__container__task">
                        <span class="tasks__container__task__circle"></span>
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

const deleteTask = () => {
    let TasksElements = document.querySelectorAll(".task");
    TasksElements.forEach( taskElement => {
        taskElement.addEventListener("click", (task) => {
            console.log(task.target.parentElement.parentElement);
            task.target.parentElement.parentElement.remove();
        });
    });
};

recibeTask();
deleteTask();
