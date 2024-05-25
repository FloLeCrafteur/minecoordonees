document.getElementById("openSidebarBtn").onclick = function() {
    openNav();
};

document.getElementById("closeSidebarBtn").onclick = function() {
    closeNav();
};

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
}
