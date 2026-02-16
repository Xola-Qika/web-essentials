let screen = document.getElementById("screen");

let seven = document.getElementById("seven");
let eight = document.getElementById('eight');
let nine = document.getElementById("nine");
let plus = document.getElementById("plus");

let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let minus = document.getElementById("minus");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let xxx = document.getElementById("xxx");

let c = document.getElementById("c");
let zero = document.getElementById("zero");
let equal = document.getElementById("equal");
let stroke = document.getElementById("stroke");

seven.onclick = function() {
    screen.value += '7';
}
eight.onclick = function() {
    screen.value += '8';
}
nine.onclick = function() {
    screen.value += '9';
}
plus.onclick = function () {
    screen.value += '+';
}

four.onclick = function() {
    screen.value += '4';
}
five.onclick = function() {
    screen.value += '5';
}
six.onclick = function() {
    screen.value += '6';
}
minus.onclick = function() {
    screen.value += '-';
}


one.onclick = function() {
    screen.value += '1';
}
two.onclick = function() {
    screen.value += '2';
}
three.onclick = function() {
    screen.value += '3';
}
xxx.onclick = function() {
    screen.value += '*';
}

c.onclick = function() {
    screen.value = '';
}
zero.onclick = function() {
    screen.value += "0";
}
equal.onclick = function() {
    screen.value = eval(screen.value);
}
stroke.onclick = function() {
    screen.value += "/";
}

