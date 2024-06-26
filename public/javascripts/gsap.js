// animate register intro page:
function registerIntro() {
   let tl = gsap.timeline()
   tl.to("#intro", {
      opacity: 1,
      scale: 1,
      delay: 0.3
   })
   tl.from("#intro div", {
      opacity: 0,
      duration: 0.5,
      y: -50,
      yoyo: 2
   })
   tl.from("#mainName span", {
      opacity: 0,
      duration: 1,
      y: 50,
      stagger: 0.125,
      delay: 0.2
   })
   tl.to("#intro", {
      scale: 0,
      opacity: 0,
      display: "none"
   })
   tl.to("main",{
      display: "block",
      scale: 1,
      opacity: 1
   }, "-=0.15")
}

function newUpdateInfo() {
   let tl = gsap.timeline()
   tl.from("#info .alert",{
      y: -80,
      delay: 0.5,
      duration: 0.5
   })
   tl.from("#info .alert span",{
      y: 80,
      duration: 0.5
   },"-=0.2")
}
newUpdateInfo()

