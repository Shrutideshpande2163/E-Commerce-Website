let prevBtn = document.querySelector("#prev-slide");
let nextBtn = document.querySelector("#next-slide");
let outer = document.querySelector(".outer");

prevBtn.addEventListener("click",()=>{
   outer.style.leftMargin = "-200px";
})