function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evalutes the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q; 
}