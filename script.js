function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Show the button when scrolling down 100px from the top
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll back to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}