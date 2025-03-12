const bar = document.getElementsByTagName("i")[1];
const nav2 = document.querySelector(".nav2");
const up = document.querySelector(".up");
const cont = document.querySelectorAll(".cont");
const lia = document.querySelectorAll("li>a");
const Allbutton = document.querySelectorAll(".all-button>button");
console.log(Allbutton)
let trans = document.getElementsByTagName("i")[2];
let body = document.getElementById("body");
let trans2 = document.querySelector(".trans2");
let lang=document.getElementById("lang");

const contHead = document.querySelector("header>.container");
contHead.addEventListener("click", (eo) => {
  if (eo.target.className == "fa-solid fa-bars") {
    const nav2 = document.querySelector(".nav2");
    nav2.classList.toggle("nav2-h");
  }
});

cont.forEach((Item) => {
  Item.addEventListener("click", (eo) => {
    nav2.classList.remove("nav2-h");
  });
});
window.onscroll = function () {
  if (window.scrollY >= 100) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
up.addEventListener("click", (eo) => {
  window.scrollTo({ left: 0, top: 0 });
});



 
 
lia.forEach((Item) =>
{
  Item.addEventListener("click",(eo) => {
 
    
    lia.forEach((Item) =>{
      Item.classList.remove("active-header")
    })
    eo.currentTarget.classList.add("active-header")
  })
})





let Git=document.querySelector(".Git");

// Git.addEventListener("click", (eo) => {
  
 
// });
