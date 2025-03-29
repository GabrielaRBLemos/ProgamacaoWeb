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
if (window.location.href == window.location.origin + "/portfolio/senha.html") {
    function getRandomCode() {
        let digits = [];
        while (digits.length < 4) {
            let digit = Math.floor(Math.random() * 10);
            if (!digits.includes(digit)) {
                digits.push(digit);
            }
        }
        return digits.join('');
    }
    const code = getRandomCode();
    alert("A senha é: "+code)
    function mixedExactCount(codeArray, answerArray) {
        let exactNum = 0;
        let mixedNum = 0;
        //exacts
        for (let i = 0; i < 4; i++) {
            if (codeArray[i] === answerArray[i]) {
                exactNum++;
                // marcando posições como nulas pra não contá-las como misturadas
                codeArray[i] = null;
                answerArray[i] = null;
            }
        }
        //mixed
        for (let i = 0; i < 4; i++) {
            if (answerArray[i] !== null && codeArray.includes(answerArray[i])) {
                mixedNum++;
                codeArray[codeArray.indexOf(answerArray[i])] = null; // pra evitar contar de novo
            }
        }
        return { exactNum, mixedNum };
    }
    function createNewItem(codeAnswer,exactNum,mixedNum) {
        const newAttempt = document.createElement('li');
        const attemptList = document.getElementById('attemptList');
        newAttempt.innerHTML = codeAnswer + ' - <img src="/Assets/droplet.svg"/>: ' + exactNum + ' <img src="/Assets/droplet-half-2.svg"/>: ' + mixedNum;
        
        if (attemptList.firstChild) {
            attemptList.insertBefore(newAttempt, attemptList.firstChild);
        } else {
            attemptList.appendChild(newAttempt); // If the list is empty, just append
        }
    }
    function checkCode() {
        let codeAnswer = document.getElementById("code").value;
        let codeArray = code.split('');
        let answerArray = codeAnswer.split('');
        const { exactNum, mixedNum } = mixedExactCount(codeArray, answerArray);
        if (exactNum == 4) {
            document.getElementById("result").innerText = "Parabéns! Você acertou!";
            document.getElementById("codeButton").innerText = "Jogar de novo?";
            document.getElementById("code").value = "";
            document.getElementById("codeButton").onclick = function() {location.reload();};
        }
        createNewItem(codeAnswer, exactNum, mixedNum);
    }
}
