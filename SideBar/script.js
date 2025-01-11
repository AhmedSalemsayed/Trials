const nav = document.querySelector(".nav");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const main = document.querySelector(".main");

let btnContent = "Open";
const handleNavBar = () => {
  if (btnContent === "Open") {
    nav.style.width = 250 + "px";
    nav.style.padding = 8 + "px";
    main.style.marginLeft = 250 + "px";
    main.style.backgroundColor = "rgba(0,0,0,0.4)";
    openBtn.innerHTML = "Close";
    btnContent = "Close";
  } else if (btnContent === "Close") {
    nav.style.width = 0 + "px";
    nav.style.padding = 0;
    main.style.marginLeft = 0;
    main.style.backgroundColor = "white";
    openBtn.innerHTML = "Open";
    btnContent = "Open";
  }
};
openBtn.addEventListener("click", handleNavBar);
closeBtn.addEventListener("click", handleNavBar);
