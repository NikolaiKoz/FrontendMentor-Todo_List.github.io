const loadAndCreatedTask = () => {

    const allTasks = [];

    const checkLocalStorage = () => {
        if (localStorage.getItem('tasks')) {
            allTasks.push(...JSON.parse(localStorage.getItem('tasks')));
        }
    };
    checkLocalStorage();

    const load = () => {

        const taskContainer = document.getElementById('taskContainer');

        allTasks.forEach((task) => {

            const taskCard =    `
                                            <article class="task">
                                                <div class="tasks__container__task checkText">
                                                    <span class="tasks__container__task__circle check">
                                                        <img class="imgPaloma" src="./images/icon-check.svg" alt="Check" class="checkSvg">
                                                    </span>
                                                    <p class="tasks__container__task__text">${task.text}</p>
                                                </div>
                                                <picture>
                                                    <img class="tasks__container__task__delete" src="./images/icon-cross.svg" alt="Icon Cross">
                                                </picture>
                                            </article>
                            `;

        taskContainer.insertAdjacentHTML('afterbegin', taskCard);


        });
    };
    load();




};
loadAndCreatedTask();