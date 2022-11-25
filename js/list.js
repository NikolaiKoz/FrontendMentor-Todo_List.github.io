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
    clearCompleted();
  });

};

const generatedList = (taskList) => {
  const taskContainer = document.getElementById("taskContainer");
  let lastTask = `
                <article class="task">
                    <div class="tasks__container__task">
                        <span class="tasks__container__task__circle hide">
                            <img src="./images/icon-check.svg" alt="Check" class="checkSvg">
                        </span>
                        <p class="tasks__container__task__text">${taskList[taskList.length - 1]}
                        </p>
                    </div>
                    <picture>
                        <img class="tasks__container__task__delete hide" src="./images/icon-cross.svg" alt="Icon Cross">
                    </picture>
                </article>
                `;
    taskContainer.insertAdjacentHTML("afterbegin", lastTask);
    checked();
    hideDeletedAndChecks();

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

const checked = () => {
    const check = document.querySelectorAll(".tasks__container__task__circle");
    check.forEach((task) => {
        task.addEventListener("click", () => {
            task.parentElement.classList.toggle("checkText");
            task.classList.toggle("check");
        });
    });
};

const clearCompleted = () => {
    const clearCompleted = document.getElementById("clearAllTasks");
    clearCompleted.addEventListener("click", () => {
        const completedTasks = document.querySelectorAll(".check");
        completedTasks.forEach((task) => {
            task.parentElement.parentElement.remove();
            counterTasks();
        }
        );

    });
};

const activeTasks = () => {
    const activeTasks = document.getElementById("activeTasks");
    activeTasks.addEventListener("click", () => {
        const completedTasks = document.querySelectorAll(".task");
        completedTasks.forEach((task) => {
            if (task.childNodes[1].childNodes[1].classList.contains("check")) {
                task.classList.add("hide");
            } else {
                task.classList.remove("hide");
            }
        });
    });
};

const completedTasks = () => {
    const completedTasks = document.getElementById("completedTasks");
    completedTasks.addEventListener("click", () => {
        const completedTasks = document.querySelectorAll(".task");
        completedTasks.forEach((task) => {
            if (!task.childNodes[1].childNodes[1].classList.contains("check")) {
                task.classList.add("hide");
            } else {
                task.classList.remove("hide");
            }
        });
    });
};

const allTasks = () => {
    const allTasks = document.getElementById("allTasks");
    allTasks.addEventListener("click", () => {
        const completedTasks = document.querySelectorAll(".task");
        completedTasks.forEach((task) => {
            task.classList.remove("hide");
        });
    });
};

const changeSelect = () => {
    const select = document.querySelectorAll(".footer__main__btn");
    select.forEach((task) => {
        task.addEventListener("click", () => {
            select.forEach((task) => {
                task.classList.remove("select");
            });
            task.classList.add("select");
        });
    }
    );
};

const hideDeletedAndChecks = () => {
    const task = document.querySelectorAll(".task");
    task.forEach((task) => {
        task.addEventListener("mouseover", () => {
            task.childNodes[3].childNodes[1].classList.remove("hide");
        }
        );
        task.addEventListener("mouseout", () => {
            task.childNodes[3].childNodes[1].classList.add("hide");
        }
        );
    });
};





recibeTask();
counterTasks();
checked();
clearCompleted();
activeTasks();
completedTasks();
allTasks();
changeSelect();
hideDeletedAndChecks();

/*
PENDIENTES:
- Drag and Drop
- Dark Side
*/
