const button = document.querySelector(".button");
const buttonBorderOne = button.querySelector(".button__border--one");
const buttonBorderTwo = button.querySelector(".button__border--two");
const distance = 5;

function borderMove(event) {
    const width = button.offsetWidth;
    const height = button.offsetHeight;

    // const x = event.offsetX;
    // const y = event.offsetY;

    const { offsetX: x, offsetY: y } = event;

    // console.log(event);
    // console.log("X", x);
    // console.log("Y", y);

    const xDistance = (x / width + distance) - (distance / 2);
    const yDistance = (y / height + distance) - (distance / 2);

    buttonBorderOne.style.transform = `
    translate(${-xDistance}px, ${yDistance}px)`;

    buttonBorderTwo.style.transform = `
    translate(${xDistance}px, ${-yDistance}px)`;
}

function borderReset() {
    buttonBorderOne.style.transform = `
    translate(0px, 0px)`;

    buttonBorderTwo.style.transform = `
    translate(0px, 0px)`;

}

button.addEventListener("mousemove", borderMove);
button.addEventListener("mouseleave", borderReset);