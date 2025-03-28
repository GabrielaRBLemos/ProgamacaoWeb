// START efeito de digitação
const logo = document.getElementById("logo");
const text = logo.textContent;
const defaultText = " ";
let index = 0;

logo.textContent = "";

function type() {
    if (index < text.length) {
        logo.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        setTimeout(remove, 1000);
    }
}

function remove() {
    if (index > 0) {
        logo.textContent = logo.textContent.slice(0, -1);
        index--;
        setTimeout(remove, 100);
    } else {
        logo.textContent = defaultText;
        setTimeout(type, 1000);
    }
}
type();
// END efeito de digitação
console.log(logo.textContent);

