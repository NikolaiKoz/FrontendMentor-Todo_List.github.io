const recibeTask = () => {
  const taskInput = document.getElementById("taskInput");
  const addTask = document.getElementById("addTask");
  const taskList = [];

  addTask.addEventListener("click", () => {
    taskList.push(taskInput.value);
    generatedList(taskList);
    taskInput.value = "";
    deleteTask(taskList);
    counterTasks();
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

const deleteTask = (taskList) => {
   const deleteTask = document.querySelectorAll(".tasks__container__task__delete");
    deleteTask.forEach((task, index) => {
        task.addEventListener("click", () => {
            taskList.splice(index, 1);
            task.parentNode.parentNode.remove();
            counterTasks();
        });
    }
    );
};

const counterTasks = () => {
    const counter = document.getElementById("counterTasks");
    counter.innerHTML = `${document.querySelectorAll(".task").length} items left`;
};



recibeTask();
counterTasks();
