window.addEventListener("scroll", function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 100) { // Adjust the threshold as needed
        backToTopButton.style.opacity = "1";
    } else {
        backToTopButton.style.opacity = "0";
    }
});

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});