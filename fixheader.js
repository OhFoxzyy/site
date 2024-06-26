// When the user scrolls the page, execute fixheader function
window.onscroll = function() { fixheader() };

// Get the header
var header = document.getElementById("fixheader");

// Get the offset position of the header
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixheader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
