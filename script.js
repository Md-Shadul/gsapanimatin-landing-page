var tl= gsap.timeline()

tl.from(".navlogo, .navlinks-wrapper h3, .navright h4 , .navright button",{
    y:-100, 
    duration:0.8,
    delay:1,
    opacity:0,
    stagger:0.2,
})

tl.from("h1",{
    y:200,
    duration:1,
    opacity:0,
    stagger:0.3,
})
tl.from(".heading-wrapper>img",{
    scale:0,
    opacity:0,
    duration:0.5,

})

