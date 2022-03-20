const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".anchor_list");
const links = document.querySelectorAll(".anchor_list li");
const allSection = document.querySelector("body")



hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    navLinks.style.display = "flex"
    if (navLinks.classList.contains("open")) {
        allSection.style.overflow = "hidden"
    } else {
        allSection.style.overflow = "scroll"
    }



    links.forEach(link => {
        link.classList.toggle("fade");
        if (navLinks.classList.contains("open")) {
            link.classList.add("fade");
        } else {
            link.classList.remove("fade");
        }
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

links.forEach(link => {
    link.addEventListener("click", function (e) {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("toggle");
        links.forEach(link => {
            link.classList.toggle("fade");
            if (navLinks.classList.contains("open")) {
                link.classList.add("fade");
                allSection.style.overflow = "hidden"
            } else {
                link.classList.remove("fade");
                allSection.style.overflow = "scroll"
            }
        });
    })
})