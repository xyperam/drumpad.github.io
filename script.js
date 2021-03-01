window.addEventListener("load",()=>{
    const sound = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
  
// mengaktifkan suara saat di klik
    pads.forEach((pad,index)=>{
        pad.addEventListener("click",function() {
            sound[index].currentTime = 0;
            sound[index].play();
        });
    });

})