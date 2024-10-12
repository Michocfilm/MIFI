function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // duration in ms
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
// burger-menu
const hamicon = document.getElementById('hamicon')
const burgermenu = document.getElementById('burgermenu')

hamicon.addEventListener("click",()=>{
    if (burgermenu.style.display === "block"){
        burgermenu.style.display = "none";
    }else{
        burgermenu.style.display = "block";
    }
    
})

function myFunction(hamicon) {
    hamicon.classList.toggle("change");
}

