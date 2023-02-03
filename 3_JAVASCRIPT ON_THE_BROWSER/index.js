const title = document.querySelector("div.hello:first-child h1");
const title2 = document.querySelector("div.hello :nth-child(2)");
// const classTest = document.getElementsByClassName("test");
// console.log(classTest);
// title.style.color = "blue"; // title 색상변경

//title을 click 햇을때 무언가를 할 행동
const handleTitleClick = () => {
  title.innerText = "You just clicked!";
  title.style.color = "blue";
};
const handleTitleMouseEnter = () => {
  title.innerText = "The mouse is here!";
  title.style.color = "green";
};
const handleTitleMouseLeave = () => {
  title.innerText = "The mouse is gone!";
  title.style.color = "skyblue";
};
const handleWindowRightClick = () => {
  title.innerText = "That was right click!";
  title.style.color = "tomato";
};
const handleWinodwResize = () => {
  title.innerText = "You just resized!";
  title.style.color = "purple";
};
const handleWindowCopy = () => {
  alert("copier!");
};
const handleWindowOffline = () => {
  alert("SOS on WIFI");
};
const handleWindowOnline = () => {
  alert("ALL Good!");
};

const handleTitle2Click = () => {
  title2.classList.toggle("active");
  //   const clickedClass = "clicked";
  console.log(title2.classList);
  //   if (title2.classList.contains(clickedClass)) {
  //     title2.classList.remove();
  //   } else {
  //     title2.classList.add(clickedClass);
  //   }
};
//title의 클릭을 listen 하고, click event가 발생하면, handleTitleClick 함수가 동작함
title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick //위와 동일한 동작을 하는 코드
title.addEventListener("mouseenter", handleTitleMouseEnter);
title.addEventListener("mouseleave", handleTitleMouseLeave);
window.addEventListener("contextmenu", handleWindowRightClick);
window.addEventListener("resize", handleWinodwResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

title2.addEventListener("click", handleTitle2Click);

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
