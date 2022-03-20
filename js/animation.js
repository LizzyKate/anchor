gsap.registerPlugin(TextPlugin);

let card = document.querySelector(".hero_img")
let editor = document.querySelector(".editor_code")

const hero = gsap.timeline({ defaults: { opacity: 0, stagger: 0.2, display: "none", autoAlpha: 0 }, repeat: -1 })
function init() {
    hero.from(".anchor_hero", { autoAlpha: 0, duration: 0.001 })
        .from(".hero_img", { ease: "linear", rotate: 270, transformOrigin: "50% 50%", onComplete: disappear, duration: 2 })
        .from(".editor_code", { onComplete: code, duration: 5 })
        .from(".phone_img", { autoAlpha: 1, duration: 2 })


    function disappear() {
        card.style.display = 'none'
    }
    function code() {
        editor.style.display = 'none'
    }
}

const typewriter = gsap.timeline({ defaults: { repeat: -1, repeatDelay: 6 } })
typewriter.to(".first", { duration: 1, text: ". container {" })
    .to(".second", { duration: 1, text: " width: 590px;" })
    .to(".third", { duration: 1, text: " height: 374px;" })
    .to(".fourth", { duration: 1, text: " }" })

window.addEventListener("load", function (event) {
    init()
})

const typing = gsap.timeline({ defaults: { repeat: -1, repeatDelay: 2 } })
typing.to(".fifth", { duration: 1, text: ". container {" })
    .to(".sixth", { duration: 1, text: " width: 590px;" })
    .to(".seventh", { duration: 1, text: " height: 374px;" })
    .to(".eighth", { duration: 1, text: " }" })