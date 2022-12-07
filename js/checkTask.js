const checkTask = () => {

    const taskContainer = document.getElementById("main");

    taskContainer.addEventListener("mousemove", () => {

        const checkTask = document.querySelectorAll(".tasks__container__task__circle");

        checkTask.forEach((task) => {
            task.addEventListener("click", (e) => {

                console.log( "Event" + e.target);
                console.log( "Task" + task);


                task.childNodes[1].classList.toggle("hide");
                task.parentElement.classList.toggle("checkText");
                task.classList.toggle("check");
            });
        }
        );
    });



};
checkTask();