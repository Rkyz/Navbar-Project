function myFunction() {
    var element = document.querySelector(".header .navbar ul");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      var width = window.innerWidth;
      if (width < 768) {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    }
  }
  
 function handleResize() {
    var navbar = document.querySelector(".header .navbar ul");
    var width = window.innerWidth;
    if (width >= 768) {
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "none";
    }
  }
  
  window.addEventListener("resize", handleResize);