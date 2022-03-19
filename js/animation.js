gsap.registerPlugin(TextPlugin);

let card = document.querySelector(".hero_img")
let editor = document.querySelector(".editor_code")

const hero = gsap.timeline({ defaults: { opacity: 0, stagger: 0.2, display: "none", autoAlpha: 0 }, repeat: -1 })
hero.from(".hero_img", { ease: "linear", rotate: 270, transformOrigin: "50% 50%", onComplete: disappear, duration: 1 })
    .from(".editor_code", { autoAlpha: 1, onComplete: code, duration: 5 })
    .from(".phone_img", { autoAlpha: 1 })


function disappear() {
    card.style.display = 'none'
}
function code() {
    editor.style.display = 'none'
}
const typewriter = gsap.timeline({ defaults: { repeat: -1, repeatDelay: 6 } })
typewriter.to(".first", { duration: 1, text: ". container {" })
    .to(".second", { duration: 1, text: " width: 590px;" })
    .to(".third", { duration: 1, text: " height: 374px;" })
    .to(".fourth", { duration: 1, text: " }" })
