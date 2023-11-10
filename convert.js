const input = document.getElementById("convert");

const mn = "фцужэнгшүзйыбөахролячёсмит";
const en = "qwertyuiopasdfghjklzxcvbnm";

function go() {
    let result = "";
    const mon = input.value.toLowerCase();

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
