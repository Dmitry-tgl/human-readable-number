module.exports = function toReadable(number) {
    let numbersFromTenToNineteen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    numbersTens = [
        0,
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < numbersFromTenToNineteen.length) {
        return numbersFromTenToNineteen[number];
    }
    let res = "";
    let hundreds = parseInt(number / 100);
    let decimals = number % 100;
    hundreds > 0 ? (res = numbersFromTenToNineteen[hundreds] + " hundred") : {};
    if (decimals >= 20) {
        res = res + " " + numbersTens[parseInt(decimals / 10)];
        decimals % 10 > 0
            ? (res = res + " " + numbersFromTenToNineteen[decimals % 10])
            : {};
    } else if (decimals > 0) {
        res = res + " " + numbersFromTenToNineteen[decimals];
    }
    res.startsWith(" ") ? (res = res.slice(1)) : {};
    return res;
};
