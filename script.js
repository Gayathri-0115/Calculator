var buttons = {
    "1": "%",
    "2": "/",
    "3": "7",
    "4": "8",
    "5": "9",
    "6": "*",
    "7": "4",
    "8": "5",
    "9": "6",
    "10": "-",
    "11": "1",
    "12": "2",
    "13": "3",
    "14": "+",
    "15": "0",
    "16": "."
};

var btnvalues = document.querySelectorAll(".btn");
console.log(btnvalues)
var arr = [];

for (let i = 0; i < btnvalues.length; i++) {
    btnvalues[i].addEventListener("click", function () {
        let a = buttons[i + 1];
        arr.push(a);
        updateDisplay();
    });
}

document.getElementById("equal").addEventListener("click", () => {
    try {
        let arrstr = arr.join("");
        let res = math.evaluate(arrstr);
        document.getElementById("display").value = res;
        arr = [res.toString()]; 
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
});

document.getElementById("allclear").addEventListener("click", () => {
    arr = [];
    updateDisplay();
});

document.getElementById("delete").addEventListener("click", () => {
    arr.pop();
    updateDisplay();
});

function updateDisplay() {
    let arrstr = arr.join("");
    document.getElementById("display").value = arrstr || "0";
}
