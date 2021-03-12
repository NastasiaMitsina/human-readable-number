module.exports = function toReadable(number) {
    const first = [
        "",
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
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let word;
    let stringNum = number.toString();

    if (stringNum.length === 1 || stringNum.length === 2) {
        if (number === 0) {
            word = "zero";
        } else if (number < 20 && number !== 0) {
            word = first[number];
        } else if (20 <= number && number < 100 && number % 10 === 0) {
            word = tens[number / 10];
        } else if (20 <= number && number < 100 && number % 10 !== 0) {
            word = `${tens[+stringNum[0]]} ${first[+stringNum[1]]}`;
        }
    }

    if (stringNum.length === 3) {
        if (number % 10 === 0 && +stringNum[1] === 0 && +stringNum[2] === 0) {
            word = `${first[number / 100]} hundred`;
        } else if (+stringNum[1] === 0) {
            word = `${first[+stringNum[0]]} hundred ${first[+stringNum[2]]}`;
        } else if (+stringNum[1] === 1) {
            newArr = `${first[+stringNum[0]]} hundred`;
            stringNum = stringNum.split("");
            stringNum = stringNum.slice(1, 3);
            stringNum = stringNum.join("");
            word = `${newArr} ${first[+stringNum]}`;
        } else if (+stringNum[2] === 0) {
            word = `${first[+stringNum[0]]} hundred ${tens[+stringNum[1]]}`;
        } else {
            word = `${first[+stringNum[0]]} hundred ${tens[+stringNum[1]]} ${
                first[+stringNum[2]]
            }`;
        }
    }

    return word;
};
