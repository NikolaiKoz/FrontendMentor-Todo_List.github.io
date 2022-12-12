const darkSide = () => {

    const btn = document.getElementById("darkSide");
    btn.addEventListener("click", () => {
        if (btn.src.includes("moon")) {
            btn.src = "./images/icon-sun.svg";
            imgMobileDark();
            desktopImgDark();
        } else {
            btn.src = "./images/icon-moon.svg";
            imgMobileLight();
            desktopImgLight();
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

const bgColors = () => {

    const bodyMainTaskInput= [
        document.getElementById("body"),
        document.getElementById("inputContainer"),
        document.getElementById("main"),
        document.getElementById("taskContainer"),
    ];

    




};


darkSide();


