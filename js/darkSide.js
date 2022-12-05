const darkSide = () => {

    const btn = document.getElementById("darkSide");
    btn.addEventListener("click", () => {
        if (btn.src.includes("moon")) {
            btn.src = "./images/icon-sun.svg";
            imgMobileDark();
            desktopImgDark();
            bodyDarkColor();
        } else {
            btn.src = "./images/icon-moon.svg";
            imgMobileLight();
            desktopImgLight();
            bodyDarkColor();
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

const bodyDarkColor = () => {
    const body = document.querySelector("body");
    body.classList.toggle("bodyDark");

    const generalBg = document.getElementById("inputContainer");
    generalBg.classList.toggle("input__container__inputDark");

    const input = document.getElementById("taskInput");
    input.classList.toggle("input__container__inputDark");

    const tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        task.classList.toggle("input__container__inputDark");
        task.classList.toggle("borderDark");
        task.classList.toggle("tasks__letterDark");
    }
    );

    const tasksChecked = document.querySelectorAll(".checkText");
    tasksChecked.forEach(task => {
        task.classList.toggle("checkText__Dark");
    }
    );

    const footerSection = document.getElementById("footerSection");
    footerSection.classList.toggle("input__container__inputDark");
    footerSection.classList.toggle("bordertopDark");

    const footerMain = document.getElementById("footerMain");
    footerMain.classList.toggle("input__container__inputDark");

};







darkSide();