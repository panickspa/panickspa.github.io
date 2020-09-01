var hello = document.getElementById("greeting");
var myname = document.getElementById("name");
var twiter = document.getElementById("twitter");
var end = document.getElementById("end");

var slides = [...document.querySelectorAll("div.hook")];

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0,
        duration: "300%"
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
    // .addIndicators()
    .addTo(controller)
    .on("progress", e => {
        let prog = progressAnim(e.progress, elmArr)
        console.log(prog, e.progress)
        if(prog.completed > 0 ) {
            elmArr[0].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[1].setAttribute("style", `clip-path : inset(${100-prog.current*100}% 0px 0px)`)
            elmArr[2].setAttribute("style", `clip-path : inset(100% 0px 0px)`)
        }else if(prog.completed > 1 ) {
            elmArr[0].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[1].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[2].setAttribute("style", `clip-path : inset(${100-prog.current*100}% 0px 0px)`)
        }else if(prog.completed > 2 ) {
            elmArr[0].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[1].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
            elmArr[2].setAttribute("style", `clip-path : inset(0% 0px 0px)`)
        }else if(prog.completed == 0){
            elmArr[0].setAttribute("style", `clip-path : inset(${100-prog.current*100}% 0px 0px)`)
            elmArr[1].setAttribute("style", `clip-path : inset(100% 0px 0px)`)
            elmArr[2].setAttribute("style", `clip-path : inset(100% 0px 0px)`)
        }
    });
