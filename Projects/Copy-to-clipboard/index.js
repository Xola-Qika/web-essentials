let input = document.getElementById("box1");
let btn = document.getElementById("box2");
let box3 = document.getElementById("box3");

btn.addEventListener("click", function () {
    input.select();
    navigator.clipboard.writeText(input.value);
});
