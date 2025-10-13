
    const sideMenu = document.getElementById("sideMenu");
    const darkToggle = document.getElementById("darkToggle");
    const themeIcon = document.getElementById("themeIcon");


    window.openMenu = function () {
      if (sideMenu) sideMenu.style.right = "0";
    };


    window.closeMenu = function () {
      if (sideMenu) sideMenu.style.right = "-260px";
    };


    if (darkToggle) {
      darkToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");

        if (document.documentElement.classList.contains("dark")) {
          localStorage.setItem("theme", "dark");
          themeIcon.classList.remove("bi-moon-fill");
          themeIcon.classList.add("bi-brightness-low-fill");
        } else {
          localStorage.setItem("theme", "light");
          themeIcon.classList.remove("bi-brightness-low-fill");
          themeIcon.classList.add("bi-moon-fill");
        }
      });
    }


    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      themeIcon.classList.remove("bi-moon-fill");
      themeIcon.classList.add("bi-brightness-low-fill");
    }

    

