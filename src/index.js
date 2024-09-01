import "./style.css";

const userInterfaceComponents = (function UserInterfaceComponents() {
  const menuButton = document.querySelector(".menu-button");
  const menuOptions = document.querySelector(".menu-options");

  const submitButton = document.querySelector(".submit-button");
  const submitOptions = document.querySelector(".submit-options");

  const dropdownToggle = (button, options) => {
    button.addEventListener("click", () => {
      if (!options.classList.contains("visible")) {
        options.classList.add("visible");
      } else {
        options.classList.remove("visible");
      }
    });
  };

  const menuOptionToggle = () => {
    dropdownToggle(menuButton, menuOptions);
  };

  const submitOptionToggle = () => {
    dropdownToggle(submitButton, submitOptions);
  };

  return { menuOptionToggle, submitOptionToggle };
})();

userInterfaceComponents.menuOptionToggle();
userInterfaceComponents.submitOptionToggle();
