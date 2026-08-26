// JavaScript to handle menu expansion and section title change
document.querySelector('.menu').addEventListener('click', function() {
  // Toggle the menu
  var sidenav = document.getElementById("mySidenav");
  var main = document.getElementById("main");
  if (sidenav.style.width === '240px') {
    closeNav();
  } else {
    openNav();
  }
});

/* Open the side navigation */
function openNav() {
  document.getElementById("mySidenav").style.width = "240px";
}

/* Close the side navigation */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
    // Code to close the menu
    closeNav();
  });
});

const sectionTitles = document.querySelectorAll('.sticky-title');
const currentSectionTitle = document.getElementById('current-section-title');

window.addEventListener('scroll', function() {
  let currentSection = '';
  sectionTitles.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight * 0.1) {
      currentSection = section.textContent;
    }
  });
  // if ( typeof(currentSection) !== "undefined" && currentSection !== null ) {
  //   currentSectionTitle.textContent = currentSection;
  //   // currentSectionTitle.style.opacity = 1; // Make the title visible
  // }
});
