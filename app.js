const circles = document.querySelectorAll('.circle');
let activeLightIdx = 0;
setInterval(changeLight, 1000);

function changeLight() {
    circles[activeLightIdx].className = "circle";
    activeLightIdx = (activeLightIdx + 1) % 3;

    const currentLight = circles[activeLightIdx];
    const color = currentLight.getAttribute('color');
    currentLight.classList.add(color);
}
