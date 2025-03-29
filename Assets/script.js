const host = window.location.origin
if (window.location.href == window.location.origin + "/index.html" || window.location.href == window.location.origin + "/portfolio/index.html") {
    // START efeito de digitação
    const typed = document.getElementById("typed");
    const text = typed.textContent;
    const defaultText = " ";
    let index = 0;

    typed.textContent = "";

    function type() {
        if (index < text.length) {
            typed.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(remove, 1000);
        }
    }

    function remove() {
        if (index > 0) {
            typed.textContent = typed.textContent.slice(0, -1);
            index--;
            setTimeout(remove, 100);
        } else {
            typed.textContent = defaultText;
            setTimeout(type, 1000);
        }
    }
    type();
    // END efeito de digitação
}
if (window.location.href == window.location.origin + "/portfolio/index.html") {
    //START Portfolio buttons
    const portfolio = document.getElementById("port");
    const itemWidth = portfolio.offsetWidth;
    const rightButton = document.getElementById("right-button");
    const leftButton = document.getElementById("left-button");
    rightButton.onclick = () => {
        portfolio.scrollBy({
            left: itemWidth / 4,
            behavior: 'smooth' // Adiciona o scroll suave
        });
    }
    leftButton.onclick = () => {
        portfolio.scrollBy({
            left: -(itemWidth / 4),
            behavior: 'smooth'
        });
    };
}


