const generatedOptions = () => {
  const mobileContainer = document.getElementById("mobileContainer");
  const desktopContainer = document.getElementById("desktopContainer");

  const optionsToShow = `
                                <button id="allTasks" class="footer__main__btn select">All</button>
                                <button id="activeTasks" class="footer__main__btn">Active</button>
                                <button id="completedTasks" class="footer__main__btn">Completed</button>
                            `;

  if (window.innerWidth < 768) {
    mobileContainer.innerHTML += optionsToShow;
  } else {
    document.getElementById("mobileContainer").remove();
    desktopContainer.innerHTML += optionsToShow;
  }

  //Crear un lisener en la ventana para que cada vez que se cambie de tamaño se vuelva a ejecutar la funcion
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      window.location.reload();
    } else {
      window.location.reload();
    }
  });
};
generatedOptions();
