const input = document.getElementById("convert");

const mon = input.target.value.toLowerCase();
const mn = "фцужэнгшүзйыбөахролячёсмит";
const en = "qwertyuiopasdfghjklzxcvbnm";

function go() {
    let result = "";

mon.split("").forEach((letter, index) => {
    const letterIndex = mn.indexOf(letter);
    if (letterIndex !== -1) {
        result += en[letterIndex];
    } else {
        result += letter;
    }
});

alert(result);
}
