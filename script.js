// JavaScript source code
function barBorder(barNo) {
    if (barNo == stolpeNummer) {
        stolpeNummer = 'ingen stolpe er valgt';
        Knapp = 'disabled';
    }
    else {
        stolpeNummer = barNo;
        Knapp = '';
    }
    show()
}
function removeBar() {
    numbers.splice(stolpeNummer - 1, 1);
    show();
}

function endrestolpe() {
    if (inputValue < 1 || inputValue > 10) {
        alert('ugyldig nummer');
        return inputValue;
    }
    numbers.splice(stolpeNummer - 1, 1, inputValue);
    show();
}

function addStolpe() {
    if (inputValue < 1 || inputValue > 10) {
        alert('ugyldig nummer');
        return inputValue;
    }
    numbers.push(inputValue);
    show();
}