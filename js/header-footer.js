// LOAD HEADER
fetch("components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

     // ================= ACTIVE MENU =================

    const currentPage =
      window.location.pathname.split("/").pop();

    const navLinks =
      document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {

      const linkPage =
        link.getAttribute("href");

      if(linkPage === currentPage){

        link.classList.add("active");

      }

    });
    
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", () => {
      navbar.classList.add("active");
      overlay.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

// LOAD FOOTER
fetch("components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });