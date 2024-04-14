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
        //  console.log(counter);
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
        // console.log(counter);
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
                //    console.log(counter);
                   sliding();
               }
               else{
                   counter--;
                   clearInterval(autoscroll);
               }
           },5000)
}



// next course card adjustment............................................................................................
let windowsize;
let cardbox=document.querySelectorAll(".swiper-col");
let dotbtn=document.querySelectorAll(".mydotbtn");
let sum=0;


for(i=0; i<5; i++){
    cardbox[i].style.left=`${i*33}%`;
   }

   dotbtn.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{

        dotbtn.forEach(btn => {
            btn.classList.remove("btncolor");
        });
      btn.classList.add("btncolor")
        sum=index;
        slidebox();
        console.log(sum);
    })
    
})


function slidebox(){
    
          cardbox.forEach(box => {
            box.style.transform=`translateX(-${sum*100}%)`;

        });
       }
// let windowsize=window.innerWidth;

// window.addEventListener("resize",()=>{
//     windowsize=window.innerWidth;
//     slidebox();
//     console.log(windowsize);
// })
// window.addEventListener("resize",()=>{
//     adjustCardPositions();
//     slidebox();
// })
// for(i=0; i<5; i++){
//     cardbox[i].style.left=`${i*33}%`;
//    }
// function adjustCardPositions(){
//     windowsize=window.innerWidth;
//    if(windowsize>=1200){
//     for(i=0; i<5; i++){
//         cardbox[i].style.left=`${i*33}%`;
//        }
//    }
//    else if(windowsize>=992){
//     for(i=0; i<5; i++){
//         cardbox[i].style.left=`${i*33}%`;
//        }
//    }
//    else if(windowsize>=768){
//     for(i=0; i<5; i++){
//         cardbox[i].style.left=`${i*50}%`;
//        }
//    }
//    else if(windowsize<=576){
//     for(i=0; i<5; i++){
//         cardbox[i].style.left=`${i*100}%`;
//        }
//    }
// }
// // adjustCardPositions();

// function slidebox(){
//     windowsize = window.innerWidth;
//     console.log(windowsize);
//    if(windowsize>=1200){
//       cardbox.forEach(box => {
//         box.style.transform=`translateX(-${sum*33}%)`;
//     });
//    }
//    else if(windowsize>=992){
//         cardbox.forEach(box => {
//         box.style.transform=`translateX(-${sum*33}%)`;
//     });
//    }
//    else if(windowsize>=768){
//     cardbox.forEach(box => {
//     box.style.transform=`translateX(-${sum*50}%)`;
//    });
//     }
//     else if(windowsize<=576){
//         cardbox.forEach(box => {
//         box.style.transform=`translateX(-${sum*100}%)`;
//     });
//     }
// }
// dotbtn.forEach((btn,index)=>{
//     btn.addEventListener("click",()=>{
//         sum=index;
//         slidebox();
//         console.log(sum);
//     })
// })


