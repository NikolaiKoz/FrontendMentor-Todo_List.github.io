const dragAndDrop = () => {

    const taskContainer = document.getElementById("taskContainer");

    Sortable.create(taskContainer, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });

    const reorderTasksLocalStorage = () => {

        const tasks = document.querySelectorAll('.task');

        tasks.forEach((task) => {
            task.addEventListener('dragleave', (e) => {
                console.log(e);
            });
        });



    };
    reorderTasksLocalStorage();

};
dragAndDrop();