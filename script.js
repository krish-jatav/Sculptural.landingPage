var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var text = document.querySelector("text-r")


main.querySelector("#main")

main.addEventListener("mousemove", function(dets) {
    cursor.style.left = `${dets.x }px`
    cursor.style.top = `${dets.y }px`
    cursor.style.scale = 1
})
cursor.addEventListener("mouseenter", function() {

    cursor.style.scale = 1
    cursor.style.left = `${dets.x}px`
    cursor.style.top = `${dets.y }px`
})



var tl = gsap.timeline();
tl.from(".nav", {

    duration: ".9",
    opacity: "0",
    scale: "0.3",
    x: "200"


})
tl.from("#main", {

    duration: "2",
    opacity: "0",
    delay: "1",


})

tl.from(".nav h1 ", {

    duration: ".9",
    opacity: "0",
    scale: "0.3",


})
gsap.from("#cursor ", {

    duration: "1",
    delay: "1",


})
tl.from(".nav-prt-2 i ", {

    duration: ".9",
    opacity: "0",
    scale: "0.3",


})
tl.from(".nav-prt-2 h3 ", {

    duration: ".9",
    opacity: "0",
    scale: "0.3",


})

gsap.from(".nav-prt-1 h4", {
    y: "-10",
    duration: ".2",
    delay: "1",
    opacity: "0",
    stagger: "1"
})
tl.from(".img-1 ", {

    duration: ".25",
    opacity: "0",
    scale: "0.3",
    delay: "1",

})
tl.from(".center-text", {

    duration: "1",
    opacity: "0",
    scale: "0.6",
    delay: "1",

})
gsap.from(".img2 img", {

    duration: "3",
    scale: "0",
    delay: "1",

})

tl.from(".btm-L-img", {

    duration: "2",
    opacity: "0",
    scale: "0",
    delay: "1",
    top: "100"

})
tl.from(".btm-R-img", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: ".1",
    y: "-100"


})


tl.from(".h1", {

    duration: ".25",
    opacity: "0",
    scale: "0",
    delay: "1",
    x: "-100"

})
gsap.from("#heading h1", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: "1",
    x: "-600",

})

gsap.from(".text-r", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: "1",
    x: "700",

})



tl.from(".defination", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: "1",

})
tl.from(".in", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: "1",
    x: "-400",

})
tl.from(".img2", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: ".2",

})
tl.from(".circle", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: "1",

})
tl.from(".ani img", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: "1",

})
gsap.from(".wave-text h4", {

    duration: "1",
    opacity: "0",
    scale: "0",
    delay: "2",

})