var hello = document.getElementById("greeting");
var myname = document.getElementById("name");
var twiter = document.getElementById("twitter");
var end = document.getElementById("end");
var content = document.getElementById("content")

var slides = [...document.querySelectorAll("div.hook")];

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0,
        duration: "300%" // this works just fine with duration 0 as well
        // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
        // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
});

function progressAnim(p, elmArr){
    let keyFrame = elmArr.length
    let prog = 100/keyFrame
    return {
        current: (1/prog*((p*100)%prog)).toFixed(2),
        completed: Math.trunc(p*100/prog)
    }
}

var elmArr = [myname, twiter, end]

new ScrollMagic
    .Scene({
        triggerElement: document.getElementById("#animate")
    })
    .setPin(document.getElementById("#animate"))
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller)
    .on("progress", e => {
        let prog = progressAnim(e.progress, elmArr)
        console.log(prog, e.progress)
        if(prog.completed > 0 ) {
            elmArr[0].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[1].setAttribute("style", `clip-path : inset(${100-prog.current*100}% 0px 0px)`)
            elmArr[2].setAttribute("style", `clip-path : inset(100% 0px 0px)`)
        }
        if(prog.completed > 1 ) {
            elmArr[0].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[1].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[2].setAttribute("style", `clip-path : inset(${100-prog.current*100}% 0px 0px)`)
        }
        if(prog.completed > 2 ) {
            elmArr[0].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[1].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[2].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
        }
        if(prog.completed == 0){
            elmArr[0].setAttribute("style", `clip-path : inset(${100-prog.current*100}% 0px 0px)`)
            elmArr[1].setAttribute("style", `clip-path : inset(100% 0px 0px)`)
            elmArr[2].setAttribute("style", `clip-path : inset(100% 0px 0px)`)
        }
    });

// new ScrollMagic
//     .Scene({
//         triggerElement: slides[1]
//     })
//     .setPin(slides[1])
//     // .addIndicators() // add indicators (requires plugin)
//     .addTo(controller)
//     .on("progress", e => {
//         myname.setAttribute(
//             "style", `clip-path : inset(${(100-e.progress*100).toFixed(2)}% 0px 0px)`
//         )
//     });

// new ScrollMagic
//     .Scene({
//         triggerElement: slides[2]
//     })
//     .setPin(slides[2])
//     // .addIndicators() // add indicators (requires plugin)
//     .addTo(controller)
//     .on("progress", e => {
//         twiter.setAttribute(
//             "style", `clip-path : inset(${(100-e.progress*100).toFixed(2)}% 0px 0px)`
//         )
//     });

// new ScrollMagic
//     .Scene({
//         triggerElement: slides[3]
//     })
//     .setPin(slides[3])
//     // .addIndicators() // add indicators (requires plugin)
//     .addTo(controller)
//     .on("progress", e => {
//         end.setAttribute(
//             "style", `clip-path : inset(${(100-e.progress*100).toFixed(2)}% 0px 0px)`
//         )
//     });
