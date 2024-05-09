function addCommas(number) {
    // Convert the number to a string
    let numStr = String(number);

    // Split the string into integer and decimal parts (if any)
    let parts = numStr.split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1] ? `.${parts[1]}` : '';

    // Add commas to the integer part
    let integerWithCommas = '';
    for (let i = integerPart.length - 1, j = 0; i >= 0; i--, j++) {
        if (j > 0 && j % 3 === 0) {
            integerWithCommas = ',' + integerWithCommas;
        }
        integerWithCommas = integerPart[i] + integerWithCommas;
    }

    // Combine integer and decimal parts (if any)
    return integerWithCommas + decimalPart;
}

module.exports = addCommas;
