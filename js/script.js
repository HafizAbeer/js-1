document.getElementById("alertString").onclick = function() {
    alert("Hafiz Abeer Ahmed");
    document.getElementById("output").innerHTML = " ";
    document.getElementById("originalstatement").innerHTML = "Hafiz Abeer Ahmed";
}

document.getElementById("alertNumber").onclick = function() {
    alert("123456789");
    document.getElementById("output").innerHTML = " ";
    document.getElementById("originalstatement").innerHTML = "123456789";
}

document.getElementById("variableNames").onclick = function() {
    document.getElementById("originalstatement").innerHTML = " ";
    document.getElementById("output").innerHTML = "<ul><li>Blank spaces are not allowed</li><li>Case sensitive</li></ul>";
}

document.getElementById("clearstatement").onclick = function() {
    document.getElementById("originalstatement").innerHTML = " ";
}

document.getElementById("clearoutput").onclick = function() {
    document.getElementById("output").innerHTML = " ";
}

document.getElementById("camelCaseExamples").onclick = function() {
    document.getElementById("output").innerHTML = "weAreLearningJavascriptInSMITLab<br>myNameIsHafizAbeerAhmed";
    document.getElementById("originalstatement").innerHTML = " ";
}

document.getElementById("sum2Numbers").onclick = function() {
    document.getElementById("output").innerHTML = " ";

    let a = 10;
    let b = 15;

    document.getElementById("originalstatement").innerHTML = "let a = 10; <br> let b = 15;";

    let sum = a + b;

    document.getElementById("output").innerHTML = "sum of a and b: " + sum;
}

document.getElementById("subtract2Numbers").onclick = function() {
    document.getElementById("output").innerHTML = " ";

    let a = 30;
    let b = 15;

    document.getElementById("originalstatement").innerHTML = "let a = 30; <br> let b = 15;";

    let sum = a - b;

    document.getElementById("output").innerHTML = "sum of a and b: " + sum;
}

document.getElementById("multiply2Numbers").onclick = function() {
    document.getElementById("output").innerHTML = " ";

    let a = 3;
    let b = 5;

    document.getElementById("originalstatement").innerHTML = "let a = 3; <br> let b = 5;";

    let sum = a * b;

    document.getElementById("output").innerHTML = "sum of a and b: " + sum;
}

document.getElementById("divide2Numbers").onclick = function() {
    document.getElementById("output").innerHTML = " ";

    let a = 18;
    let b = 3;

    document.getElementById("originalstatement").innerHTML = "let a = 18; <br> let b = 3;";

    let sum = a / b;

    document.getElementById("output").innerHTML = "sum of a and b: " + sum;
}

document.getElementById("calculatesomeNumbers").onclick = function() {
    document.getElementById("output").innerHTML = " ";

    let a = 33;
    let b = 18;
    let c = 23

    document.getElementById("originalstatement").innerHTML = "let a = 33; <br> let b = 18; <br> let c = 23;";

    let sum = a + b + c;

    document.getElementById("output").innerHTML = "sum of a, b and c is : " + sum;
}