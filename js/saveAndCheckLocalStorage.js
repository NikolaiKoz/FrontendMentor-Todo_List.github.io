const saveAndCheckLocalStorage = () => {

    const task = {
        checked: false,
        text: 'Task 1',
    };

    const allTasks = [];

    const inputTask = document.getElementById('taskInput');
    const btnAddTask = document.getElementById('addTask');

    const checkLocalStorage = () => {
        if (localStorage.getItem('tasks')) {
            allTasks.push(...JSON.parse(localStorage.getItem('tasks')));
        }
    };
    checkLocalStorage();

    const save = () => {
        newTask = Object.create(task);
        newTask.checked = false;
        newTask.text = inputTask.value;
        allTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(allTasks));
        inputTask.value = '';
    };

    btnAddTask.addEventListener('click', () => {
        save();
    });

    inputTask.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            save();
        }
    });
};
saveAndCheckLocalStorage();