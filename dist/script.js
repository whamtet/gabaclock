const x1 = 50;
const y1 = 50;

const rHour = 23;
const rMinute = 35;

const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const img = document.querySelector("img");

const setTime = () => {
    const hour = Math.floor(Math.random() * 12) + 1;
    const minute = Math.floor(Math.random() * 12) * 5;

    const minuteFrac = minute / 60;
    const hourFrac = hour / 12 + minuteFrac / 12;
    const minuteT = Math.PI * 2 * minuteFrac;
    const hourT = Math.PI * 2 * hourFrac;

    const xMinute = x1 + rMinute * Math.sin(minuteT);
    const yMinute = y1 - rMinute * Math.cos(minuteT);

    const xHour = x1 + rHour * Math.sin(hourT);
    const yHour = y1 - rHour * Math.cos(hourT);

    minuteEl.setAttribute("x2", xMinute);
    minuteEl.setAttribute("y2", yMinute);

    hourEl.setAttribute("x2", xHour);
    hourEl.setAttribute("y2", yHour);
};

setTime();
document.querySelector("svg").addEventListener("click", setTime);

const clickImg = () => {
    if (img.classList.contains("opacity-50")) {
        img.classList.remove("opacity-50");
        img.src = Math.random() > 0.5 ? "heads.jpg" : "tails.jpg";
    } else {
        img.classList.add("opacity-50");
    }
};

img.addEventListener("click", clickImg);
