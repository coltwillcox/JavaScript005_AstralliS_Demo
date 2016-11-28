var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var radios = document.getElementsByName("hand");
var total = document.getElementById("total");

function calculate() {
    var totalPrice = 0;
    totalPrice += parseFloat(menu1.options[menu1.selectedIndex].value);
    totalPrice += parseFloat(menu2.options[menu2.selectedIndex].value);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            if (radios[i].value === "right") {
                totalPrice += 5;
            } else {
                totalPrice += 10;
            }
        }
    }
    total.innerHTML = totalPrice;
}