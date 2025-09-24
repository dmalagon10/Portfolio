document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const text = header.getAttribute("data-text"); 
    header.innerHTML = ""; 

    for (let i = 0; i < text.length; i++) {
        let span = document.createElement("span");
        
        if (text[i] === " ") {
            span.innerHTML = "&nbsp;"; 
        } else {
            span.textContent = text[i];
        }

        span.style.animationDelay = `${i * 0.1}s`;
        header.appendChild(span);
    }
});

function startTransition(event, direction, url) {
    event.preventDefault();

    let runner;
    
    if (direction === "right") {
        runner = document.getElementById("runnerR");
        runner.style.transform = "translateX(185vw)"; 
    } else{
        runner = document.getElementById("runnerL");
        runner.style.transform = "translateX(-185vw)"; 
    }

    setTimeout(() => {
        window.location.href = url; 
    }, 1200);
} 
