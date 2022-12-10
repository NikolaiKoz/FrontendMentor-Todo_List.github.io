const loadAndCreatedTask = () => {

    const allTasks = [
        {
            checked: false,
            text: "Complete Todo App on Frontend Mentor"
        },
        {
            checked: false,
            text: "Pick up groceries"
        },
        {
            checked: false,
            text: "Read for 1 hour"
        },
        {
            checked: false,
            text: "10 minutes meditation"
        },
        {
            checked: false,
            text: "Jog around the park 3x"
        },
        {
            checked: true,
            text: "Complete online JavaScript course"
        },
    ];

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
                                                <div class="tasks__container__task">
                                                    <span class="tasks__container__task__circle">
                                                        <img class="imgPaloma hide" src="./images/icon-check.svg" alt="Check" class="checkSvg">
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