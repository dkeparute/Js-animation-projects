/* App JS */
function scrollFade() {
    const texts = document.querySelectorAll(".intro__text");

    texts.forEach(text => {
        const textPosition = text.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;


        if (textPosition < (windowHeight / 1.2)) {
            text.classList.add("intro__text--active");
        }
        // console.log("Text Position:", textPosition);
        // console.log("Window height:", windowHeight);;
    });

}

window.addEventListener("scroll", scrollFade);