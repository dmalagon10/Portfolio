function animateHeaderText() {
    const header = document.getElementById("header");
    if (!header) return;  

    const text = header.getAttribute("data-text"); 
    header.innerHTML = "";  

    for (let i = 0; i < text.length; i++) {
        let span = document.createElement("span");

        span.innerHTML = text[i] === " " ? "&nbsp;" : text[i]; 
        span.style.animationDelay = `${i * 0.1}s`;
        
        header.appendChild(span);
    }
}

document.addEventListener("DOMContentLoaded", animateHeaderText);