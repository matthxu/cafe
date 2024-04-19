const navigationHeight = document.querySelector("#navigation-bar").offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight - 0.9 + "px"
);
