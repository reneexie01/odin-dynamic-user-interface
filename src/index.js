import "./style.css";

const userInterfaceComponents = (function UserInterfaceComponents() {

    const menuButton = () => {
        const menuButton = document.querySelector(".menu-button");
        const menuOptions = document.querySelector(".menu-options");
        let isShowing = 0;

        menuButton.addEventListener("click", () => {
            if (isShowing === 0) {
                menuOptions.classList.add("visible");
                isShowing = 1;
            } else {
                menuOptions.classList.remove("visible");
                isShowing = 0;
            }
        });
    }

    return { menuButton }
})();

userInterfaceComponents.menuButton();