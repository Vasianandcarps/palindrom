let arr = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привет, мир",
  "А Собака боса",
  "Лёша на полке клопа нашёл",
  "Я — арка края",
];
function palindrom(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].split("").reverse().join("");
    if (str.toLowerCase === arr[i].toLowerCase) {
      return arr[i];
    }
  }
}
let s = arr.filter(palindrom);
for (let j = 0; j < s.length; j++) {
  document.write(s[j] + "<br>");
}

// function reverseString(str) { return}
// reverseString(str);
