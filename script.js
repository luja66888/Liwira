/* HAMBURGERMENU */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle =
document.querySelector('.menu__toggle');
    const navLinks =
document.querySelector('.nav__links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    });


/* FOOTER KNAPPER */
var coll = document.getElementsByClassName("button__collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}