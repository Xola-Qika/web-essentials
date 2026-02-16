let input = document.getElementById("inputt");
let button1 = document.getElementById("buttonn");
let button2 = document.getElementById("buttonn1");

let message = ""


button1.onclick = function() {
    if(input.value.length > 0 && input.value.includes(" "))
        message = input.value.replace(/\s+/g, '-').toLowerCase();

    buttonn1.value += message;
}
