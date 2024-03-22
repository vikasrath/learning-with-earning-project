let banner=document.querySelectorAll(".slide");
let prev=document.querySelector(".prev");
let next=document.querySelector(".next");
let autoscroll;
let clicked=false;
let counter=0;

// it is a (function coll) of automaticly move banner's function
autostartscroll();
 // it is for previous button
prev.addEventListener("click",()=>{

    counter--;
    if(counter>=0)
    {
         console.log(counter);
         sliding();
    }
    else{
        prev.disabled=true;
        counter++;
    }
    next.disabled=false;
    clicked=true;
})
// it is for next button
next.addEventListener("click",()=>{
    counter++;
    if(counter<=banner.length-1){
        console.log(counter);
        sliding();
    }
    else{
        next.disabled=true;
        counter--;
    }
    prev.disabled=false;
   
})
 // this is for to make saparately all images............
for(i=0; i<5; i++){

 banner[i].style.left=`${i*100}%`;
}
// it will move left right all image using counter.............
function sliding(){
    banner.forEach(img => {
        img.style.transform=`translateX(-${counter*100}%)`;
    });
}
// it  is for move all banner automaticly 
function autostartscroll(){

    autoscroll=setInterval(()=>{
               counter++;
               if(counter<=banner.length-1 && clicked===false){
                   console.log(counter);
                   sliding();
               }
               else{
                   counter--;
                   clearInterval(autoscroll);
               }
           },2000)
}

