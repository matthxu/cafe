const animationHeight = document.querySelector(".graphic-banner");
const navigationHeight = document.querySelector("#navigation-bar").offsetHeight;
const deliveryPageHeight =
    document.querySelector("#delivery-page").offsetHeight;
const locationPageHeight =
    document.querySelector("#location-page").offsetHeight;
const hamMenu = document.querySelector(".sub-ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

// Offsets scroll in relation to navbar
document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight - 0.9 + "px"
);

// Dynamically changes element size to fit within screen
let totalHeight =
    1080 - deliveryPageHeight - locationPageHeight - navigationHeight - 120;
// 120px roughly accounting for user taskbar + browser head
animationHeight.style.height = totalHeight + "px";

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});
