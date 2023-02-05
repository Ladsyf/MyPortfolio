// When the user scrolls the page, execute checkPosition
window.onscroll = function () {
    checkPosition();
};

// Check if the div has reached the top of the screen
function checkPosition() {
    // Get the div element
    var div = document.getElementById("mejpg");
    var navWidth = document.querySelector("#navigation");
    var navWidthTrigger =
        navWidth.offsetWidth == 418 || navWidth.offsetWidth == 426;
    var limit = -231;
    if (navWidthTrigger) {
        limit = -150;
    }
    console.log(navWidth.offsetWidth);
    var nav = document.getElementById("bar");
    var rect = div.getBoundingClientRect();
    var navBar = document.getElementById("navBar");
    if (rect.top < limit) {
        if (!nav.classList.contains("sticky")) {
            nav.classList.add("sticky");
            navBar.classList.add("navStick");
        }
    } else if (nav.classList.contains("sticky") && rect.top >= limit) {
        nav.classList.remove("sticky");
        navBar.classList.remove("navStick");
    }
}
const darkToggleBTN = document.querySelector("#toggleDark");
function checkIfDark() {
    isDark = localStorage.darkMode;
    if (isDark == "true") {
        document.querySelector(":root").classList.add("dark");
        darkToggleBTN.checked = "checked";
    } else {
        document.querySelector(":root").classList.remove("dark");
    }
}
checkIfDark();
function toggleDarkMode() {
    isDarkMode = darkToggleBTN.checked;
    if (isDarkMode) {
        document.querySelector(":root").classList.add("dark");
        localStorage.darkMode = true;
    } else {
        document.querySelector(":root").classList.remove("dark");
        localStorage.darkMode = false;
    }
}
darkToggleBTN.addEventListener("click", toggleDarkMode);
