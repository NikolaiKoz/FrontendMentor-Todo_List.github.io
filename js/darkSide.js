const darkSide = () => {

    const btn = document.getElementById("darkSide");
    btn.addEventListener("click", () => {
        if (btn.src.includes("moon")) {
            btn.src = "./images/icon-sun.svg";
            imgMobileDark();
            desktopImgDark();
            bgColorsDark();
        } else {
            btn.src = "./images/icon-moon.svg";
            imgMobileLight();
            desktopImgLight();
            bgColorsLigth();
        }
    }
    );
};

const imgMobileDark = () => {
    const imgMobile = document.getElementById("mobileImg");
    imgMobile.src = "./images/bg-mobile-dark.jpg";
};

const imgMobileLight = () => {
    const imgMobile = document.getElementById("mobileImg");
    imgMobile.src = "./images/bg-mobile-light.jpg";
};

const desktopImgDark = () => {
    const imgDesktop = document.getElementById("desktopImg");
    imgDesktop.src = "./images/bg-desktop-dark.jpg";
};

const desktopImgLight = () => {
    const imgDesktop = document.getElementById("desktopImg");
    imgDesktop.src = "./images/bg-desktop-light.jpg";
};

const bgColorsLigth = () => {

    //BODY
    document.getElementById("body").classList.remove("bg-dark");
    document.getElementById("body").classList.add("bg-light");

    //MAIN TASK INPUT CONTAINER
    document.getElementById("inputContainer").classList.remove("bg-dark-input-and-tasks");
    document.getElementById("inputContainer").classList.add("bg-light");

    //TASK CONTAINER
    document.getElementById("taskContainer").classList.remove("bg-dark-input-and-tasks");
    document.getElementById("taskContainer").classList.add("bg-light");

    //TASK INPUT
    document.getElementById("taskInput").classList.remove("bg-dark-input-and-tasks");
    document.getElementById("taskInput").classList.add("bg-light");

    //TASKS
    const allTasks = document.querySelectorAll(".task");
    allTasks.forEach(task => {
        task.classList.remove("bg-dark-input-and-tasks");
        task.classList.remove("bb-dark");
        task.classList.add("bg-light");
        task.classList.add("mb-light");
    });

    //TASKS TEXT AND CHECK TEXT DARK
    document.querySelectorAll(".tasks__container__task").forEach(taskText => {

        if (taskText.classList.contains("checkText-dark")) {
            taskText.classList.remove("checkText-dark");
            taskText.classList.add("checkText-light");
        } else {
            taskText.classList.remove("text-dark");
            taskText.classList.add("text-light");
        }

    });

    //FOOTER SECTION
    document.getElementById("footerSection").classList.remove("bg-dark-input-and-tasks");
    document.getElementById("footerSection").classList.remove("bt-dark");
    document.getElementById("footerSection").classList.add("bg-light");
    document.getElementById("footerSection").classList.add("bt-light");

    //MOBILE CONTAINER
    document.getElementById("mobileContainer").classList.remove("bg-dark-input-and-tasks");
    document.getElementById("mobileContainer").classList.add("bg-light");


};

const bgColorsDark = () => {

    //BODY
    document.getElementById("body").classList.remove("bg-light");
    document.getElementById("body").classList.add("bg-dark");

    //TASK INPUT CONTAINER
    document.getElementById("inputContainer").classList.remove("bg-light");
    document.getElementById("inputContainer").classList.add("bg-dark-input-and-tasks");

    //TASK CONTAINER
    document.getElementById("taskContainer").classList.remove("bg-light");
    document.getElementById("taskContainer").classList.add("bg-dark-input-and-tasks");

    //TASK INPUT
    document.getElementById("taskInput").classList.remove("bg-light");
    document.getElementById("taskInput").classList.add("bg-dark-input-and-tasks");

    //TASKS
    const allTasks = document.querySelectorAll(".task");
    allTasks.forEach(task => {
        task.classList.remove("bg-light");
        task.classList.remove("bb-light");
        task.classList.add("bg-dark-input-and-tasks");
        task.classList.add("bb-dark");
    });

    //TASKS TEXT AND CHECK TEXT DARK
    document.querySelectorAll(".tasks__container__task").forEach(taskText => {

        if (taskText.classList.contains("checkText-light")) {
            taskText.classList.remove("checkText-light");
            taskText.classList.add("checkText-dark");
        } else {
            taskText.classList.remove("text-light");
            taskText.classList.add("text-dark");
        }

    });

    //FOOTER SECTION
    document.getElementById("footerSection").classList.remove("bg-light");
    document.getElementById("footerSection").classList.remove("bt-light");
    document.getElementById("footerSection").classList.add("bg-dark-input-and-tasks");
    document.getElementById("footerSection").classList.add("bt-dark");

    //MOBILE CONTAINER
    document.getElementById("mobileContainer").classList.remove("bg-light");
    document.getElementById("mobileContainer").classList.add("bg-dark-input-and-tasks");

};






darkSide();


