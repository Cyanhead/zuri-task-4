// ! Hello dear mentor, the last function is not a part of the given task,
// ! but i used it to achieve something else. Please kindly ignore and check out the first two functions

let convertFahrToCelsius = t => {
  if (typeof t === 'number') {
    let result = (t - 32) / 1.8;
    return `${result.toFixed(4)} °C`;
  } else {
    let T = Number(t);
    if (T.toString() === 'NaN') {
      return `${t} is not a valid number but ${
        isFirstLetterVowel(t) ? 'an' : 'a'
      } ${typeof t}`;
    } else {
      return convertFahrToCelsius(T);
    }
  }
};

let checkYuGiOh = n => {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  if (typeof n === 'number') {
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
  } else {
    let N = Number(n);
    if (N.toString() === 'NaN') {
      return `invalid parameter: '${n}'`;
    } else {
      return checkYuGiOh(N);
    }
  }
  return array;
};

// * kindly ignore the below

function isFirstLetterVowel(value) {
  let valueType = typeof value;
  let firstLetter = valueType.valueOf().toString()[0];
  let alphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  for (let i = 0; i < alphabets.length; i++) {
    switch (firstLetter) {
      case alphabets[0]:
        return true;

      case alphabets[4]:
        return true;

      case alphabets[8]:
        return true;

      case alphabets[14]:
        return true;

      case alphabets[20]:
        return true;

      default:
        return false;
    }
  }
}

// * kindly ignore the above
