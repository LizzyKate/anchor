gsap.registerPlugin(TextPlugin);

let card = document.querySelector(".hero_img")
let editor = document.querySelector(".editor_code")

const hero = gsap.timeline({ defaults: { opacity: 0, stagger: 0.2, display: "none", autoAlpha: 0 }, repeat: -1 })
function init() {
    hero.from(".anchor_hero", { autoAlpha: 0, duration: 0.001 })
        .from(".hero_img", { ease: "linear", rotate: 90, transformOrigin: "50% 50%", onComplete: disappear, duration: 2 })
        .from(".editor_code", { onComplete: code, duration: 2 })
        .from(".phone_img", { autoAlpha: 1, duration: 2 })


    function disappear() {
        card.style.display = 'none'
    }
    function code() {
        editor.style.display = 'none'
    }
}

// const typewriter = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 2 })
// typewriter.to(".first", { duration: 0.1, text: "import java.net.MalformedURLException;" })
//     .to(".second", { duration: 0.1, text: " import java.net.URL;" })
//     .to(".third", { duration: 0.1, text: " import co.getanchor.myposcheckout.ipc.Config;" })
//     .to(".fourth", { duration: 0.1, text: " import co.getanchor.checkout.ipc.IPCException;" })
//     .to(".ninth", { duration: 0.1, text: " // ..." })
//     .to(".tenth", { duration: 0.1, text: " Config cnf = new Config();" })
//     .to(".tenths", { duration: 0.1, text: " URL ipcApiUrl = null;" })
//     .to(".eleventh", { duration: 0.1, text: " import co.getanchor.checkout.ipc.IPCException;" })
//     .to(".twelvth", { duration: 0.1, text: "try {" })
//     .to(".thirteenth", { duration: 0.1, text: " ipcApiUrl = new URL('https://getanchor.co/vmp/');" })
//     .to(".fourteenth", { duration: 0.1, text: " } catch (MalformedURLException ex) {" })
//     .to(".fifteenth", { duration: 0.1, text: " // Handle the malformed URL exception" })
//     .to(".sixteenth", { duration: 0.1, text: " }" })
//     .to(".seventeenth", { duration: 0.1, text: " cnf.setIpcUrl(ipcApiUrl);" })
//     .to(".eighteenth", { duration: 0.1, text: " cnf.setLang('en');" })
//     .to(".nineteenth", { duration: 0.1, text: "cnf.loadPrivateKeyFromFile('path_to_directory/storePrivateKey.pem'); // Replace `path_to_directory` with the actual file path" })
//     .to(".twentieth", { duration: 0.1, text: " cnf.loadPublicKeyFromFile('path_to_directory/apiPublicKey.pem'); // Replace `path_to_directory` with the actual file path" })
//     .to(".twenty-one", { duration: 0.1, text: " cnf.setKeyIndex(1);" })
//     .to(".twenty-two", { duration: 0.1, text: " cnf.setSid('000000000000010');" })
//     .to(".twenty-three", { duration: 0.1, text: " cnf.setVersion('1.3');" })
//     .to(".twenty-four", { duration: 0.1, text: " cnf.setWalletNumber('61938166610');" })

window.addEventListener("load", function (event) {
    init()
})


const typing = gsap.timeline({ repeat: -1, repeatDelay: 2 })

typing.to(".fifth", { duration: 2, text: "import java.net.MalformedURLException;", color: "red" })
    .to(".sixth", { duration: 2, text: " import java.net.URL;" })
    .to(".seventh", { duration: 2, text: " import co.getanchor.myposcheckout.ipc.Config;" })
    .to(".eighth", { duration: 2, text: " import co.getanchor.checkout.ipc.IPCException;" })
    .to(".twenty-five", { duration: 2, text: " // ..." })
    .to(".twenty-six", { duration: 2, text: " Config cnf = new Config();" })
    .to(".twenty-seven", { duration: 2, text: "  URL ipcApiUrl = null;" })
    .to(".twenty-eight", { duration: 2, text: " import co.getanchor.checkout.ipc.IPCException;" })
    .to(".twenty-nine", { duration: 2, text: " try {" })
    .to(".thirty", { duration: 2, text: " ipcApiUrl = new URL('https://getanchor.co/vmp/');", marginLeft: "20px", color: "red" })
    .to(".thirty-one", { duration: 2, text: " } catch (MalformedURLException ex) {" })
    .to(".thirty-two", { duration: 2, text: " // Handle the malformed URL exception" })
    .to(".thirty-three", { duration: 2, text: " }" })
    .to(".thirty-four", { duration: 2, text: " cnf.setIpcUrl(ipcApiUrl);" })
    .to(".thirty-five", { duration: 2, text: " cnf.setLang('en');" })

