let email = document.getElementById("femail");
let pass = document.getElementById("fpassword");
let button = document.getElementById("sub");


let numberFound = false;
let lowercaseFound = false;
let uppercaseFound = false;

button.onclick = function() {
    numberFound = false;
    lowercaseFound = false;
    uppercaseFound = false;


    for (let i = 0; i < pass.value.length; i++) {
    if (pass.value[i] == "0" || pass.value[i] == "1" || pass.value[i] == "2" || pass.value[i] == "3" || pass.value[i] == "4" || pass.value[i] == "5" || pass.value[i] == "6" || pass.value[i] == "7" || pass.value[i] == "8" || pass.value[i] == "9")
        numberFound = true
        else if (pass.value[i] == "a" || pass.value[i] == "b" || pass.value[i] == "c" || pass.value[i] == "d" || pass.value[i] == "e" || pass.value[i] == "f" || pass.value[i] == "g" || pass.value[i] == "h" || pass.value[i] == "i" || pass.value[i] == "j" || pass.value[i] == "k" || pass.value[i] == "l"  || pass.value[i] == "m" || pass.value[i] == "n" || pass.value[i] == "o" || pass.value[i] == "p" || pass.value[i] == "q" || pass.value[i] == "r" || pass.value[i] == "s" || pass.value[i] == "t" || pass.value[i] == "u" || pass.value[i] == "v" || pass.value[i] == "w" || pass.value[i] == "x" || pass.value[i] == "y" || pass.value[i] == "z")
            lowercaseFound = true
        else if (pass.value[i] == "A" || pass.value[i] == "B" || pass.value[i] == "C" || pass.value[i] == "D" || pass.value[i] == "E" || pass.value[i] == "F" || pass.value[i] == "G" || pass.value[i] == "H" || pass.value[i] == "I" || pass.value[i] == "J" || pass.value[i] == "K" || pass.value[i] == "L"  || pass.value[i] == "M" || pass.value[i] == "N" || pass.value[i] == "O" || pass.value[i] == "P" || pass.value[i] == "Q" || pass.value[i] == "R" || pass.value[i] == "S" || pass.value[i] == "T" || pass.value[i] == "U" || pass.value[i] == "V" || pass.value[i] == "W" || pass.value[i] == "X" || pass.value[i] == "Y" || pass.value[i] == "Z")
            uppercaseFound = true
    }


    let message = "";

    if (!numberFound) message += "Number missing. ";
    if (!lowercaseFound) message += "Lowercase letter missing. ";
    if (!uppercaseFound) message += "Uppercase letter missing. ";
    if (pass.value.length < 8) message += "Password too short. ";

    alert(message);
};

