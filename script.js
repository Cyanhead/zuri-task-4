let convertFahrToCelsius = t => {
  let conversion = temp => {
    let result = (temp - 32) / 1.8;
    return `${result.toFixed(4)}°C`;
    // toFixed() rounds it up to the given number in decimal places
  };

  switch (typeof t) {
    case 'number':
      return conversion(t);

    case 'string':
      if (t === '') {
        return `${JSON.stringify(
          t,
          null,
          1
        )} is not a valid number but a ${typeof t}`;
        // JSON.stringify pretty much takes whatever input and converts it to a JSON string
        // it takes three parameters, the desired input, a 'replacer' to replace stuff in the
        // stringification process and a 'spacer' for whitespacing and readability
      } else {
        if (conversion(Number(t)) === 'NaN°C') {
          return `${JSON.stringify(
            t,
            null,
            1
          )} is not a valid number but a ${typeof t}`;
        } else {
          return conversion(Number(t));
        }
      }

    case 'boolean':
      console.log(t);
      return `${JSON.stringify(
        t,
        null,
        1
      )} is not a valid number but a ${typeof t}`;

    case 'object':
      return `${JSON.stringify(
        t,
        null,
        1
      )} is not a valid number but an ${typeof t}`;

    default:
      if (conversion(Number(t)) === 'NaN°C') {
        return `${JSON.stringify(
          t
        )} is not a valid number but a/an ${typeof t}`;
      } else {
        return conversion(Number(t));
      }
  }
};

// console.log(convertFahrToCelsius(77));
// console.log(convertFahrToCelsius('77'));
// console.log(convertFahrToCelsius([77]));
// console.log(convertFahrToCelsius('seventy seven'));
// console.log(convertFahrToCelsius(['seventy', 7]));
// console.log(convertFahrToCelsius({ seventy: 7 }));
// console.log(convertFahrToCelsius());
// console.log(convertFahrToCelsius(''));
// console.log(convertFahrToCelsius(true));
// console.log(convertFahrToCelsius({ a: 1, b: 2 }));

let checkYuGiOh = n => {
  let analysis = num => {
    let array = [];
    for (let i = 1; i <= num; i++) {
      array.push(i);
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0 && array[i] % 3 === 0 && array[i] % 5 === 0) {
        array[i] = 'yu-gi-oh';
      } else if (array[i] % 2 === 0 && array[i] % 3 === 0) {
        array[i] = 'yu-gi';
      } else if (array[i] % 2 === 0 && array[i] % 5 === 0) {
        array[i] = 'yu-oh';
      } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        array[i] = 'gi-oh';
      } else if (array[i] % 2 === 0) {
        array[i] = 'yu';
      } else if (array[i] % 3 === 0) {
        array[i] = 'gi';
      } else if (array[i] % 5 === 0) {
        array[i] = 'oh';
      }
    }
    return array;
  };

  switch (typeof n) {
    case 'number':
      return analysis(n);

    case 'string':
      if (n === '') {
        return `invalid parameter: ${JSON.stringify(n, null, 1)}`;
      } else {
        if (Number(n).toString() === 'NaN') {
          return `invalid parameter: ${JSON.stringify(n, null, 1)}`;
        } else {
          return analysis(Number(n));
        }
      }

    default:
      return `invalid parameter: ${JSON.stringify(n, null, 1)}`;
  }
};

// console.log(checkYuGiOh(7));
// console.log(checkYuGiOh('7'));
// console.log(checkYuGiOh([7]));
// console.log(checkYuGiOh('number seven'));
// console.log(checkYuGiOh(['number', 7]));
// console.log(checkYuGiOh({ number: 7 }));
// console.log(checkYuGiOh());
// console.log(checkYuGiOh(''));
// console.log(checkYuGiOh(true));
// console.log(checkYuGiOh({ a: 1, b: 2 }));
// console.log(checkYuGiOh('the quick brown fox jumped over the lazy dog'));
