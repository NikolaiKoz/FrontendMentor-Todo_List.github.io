const dragAndDrop = () => {

    const taskContainer = document.getElementById("taskContainer");

    Sortable.create(taskContainer, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });

};
dragAndDrop();