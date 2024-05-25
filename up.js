document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("upArrow");

    scrollButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
