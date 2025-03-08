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
