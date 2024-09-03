import "./style.css";
import { userInterfaceComponents } from "./menu.js"
import { imageCarousel } from "./image-carousel.js";

userInterfaceComponents.menuOptionToggle();
userInterfaceComponents.submitOptionToggle();

imageCarousel.defaultImageCarousel();
imageCarousel.carouselButtonNavigator();
imageCarousel.carouselContainerNavigatorLeft();
imageCarousel.carouselContainerNavigatorRight();
imageCarousel.rotatingIntervalCarousel();