const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
     var t1 = gsap.timeline();
     t1.from("#nav",{
        y : '-10',
        opacity:0,
        duration:1,
        ease: Expo, 
     })
     .to(".locoelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        stagger:0.2,
        delay:-1
     })
     to(".l1",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        
     })

}


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffx = 0;

    elem.addEventListener("mouseleave",function(e){
        gsap.to(elem.querySelector("img") , {
            opacity:0,
           duration:.5
        })
    })

    elem.addEventListener("mousemove",function(e){
        var diffy = e.clientY - elem.getBoundingClientRect().top;
        // console.log(elem.getBoundingClientRect());
        diffx = e.clientX - rotate;
        rotate = e.clientX;

        gsap.to(elem.querySelector("img") , {
            opacity:1,
            ease:Power1,
            top:  diffy,
            left: e.clientX,
            rotate: gsap.utils.clamp(-20,20,diffx),
        })
    })
})


var timer = 0 
function circleSkew(){
    var xs = 1;
    var ys = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove" , function(detl){
        clearTimeout(timer);
        xs = gsap.utils.clamp(.8 , 1.2 , detl.clientX - xprev);
        ys = gsap.utils.clamp(.8 , 1.2 , detl.clientY - yprev);

        xprev = detl.clientX;        
        yprev = detl.clientY;

        circleMouseFollower(xs,ys);
    
        timer  = setTimeout(function (){
            document.querySelector("#miniCircle").style.transform = `translate(${detl.clientX}px,${detl.clientY}px) scale(1,1)`;
        } , 100);
    })

}

function circleMouseFollower(xs,ys){
    window.addEventListener("mousemove",function(detl){
        document.querySelector("#miniCircle").style.transform = `translate(${detl.clientX}px,${detl.clientY}px) scale(${xs},${ys})`;

    })
}

circleMouseFollower();
circleSkew();
firstPageAnim();

