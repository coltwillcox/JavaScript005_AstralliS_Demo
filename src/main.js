var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var radios = document.getElementsByName("hand");
var checkboxes = document.getElementsByName("sandwich");
var total = document.getElementById("total");

function calculate() {
    var totalPrice = 0;

    // Calculate values from dropdowns.
    totalPrice += parseFloat(menu1.options[menu1.selectedIndex].value);
    totalPrice += parseFloat(menu2.options[menu2.selectedIndex].value);

    // Calculate values from radio buttons.
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            if (radios[i].value === "right") {
                totalPrice += 5;
            } else {
                totalPrice += 10;
            }
        }
    }

    // Calculate values from checkboxes.
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            totalPrice += parseFloat(checkboxes[i].value);
        }
    }

    total.innerHTML = totalPrice;
}