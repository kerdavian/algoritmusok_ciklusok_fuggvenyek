// 1. feladat
// while ciklusaal

const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];

function vanENev(miben, ki) {
  let i = 0;
  do {
    if (miben[i] === ki) {
      console.log(ki + ' a ' + parseInt(i + 1) + '. helyen található a tömbben!');
      return;
    }
    i++;
  }
  while (i < miben.length);
  console.log(ki + ' nem található a tömbben!');
}

vanENev(names, 'Gábor');
vanENev(names, 'István');
vanENev(names, 'Andrea');


// 1. feladat
// probálgatások - az indexet adjuk vissza. Ha a sorszámát akarnánk akkor i+1
function vanE(miben, ki) {
  let benne_van = false;
  for (let i = 0; i < miben.length; i++) {
    if (miben[i] === ki) { benne_van = true; return i; }
  }
  return -1;

}
let van = vanE(names, 'Attila');
console.log(van);


// 1. feladat
// probálgatások 2 - az indexet adjuk vissza. Ha a sorszámát akarnánk akkor i+1
function vanE_2(miben, ki) {

  for (let i = 0; i < miben.length; i++) {
    if (miben[i] === ki) {
      console.log(ki + ' benne van a tömben a(z) ' + i + '. indexen');
      return;
    }
  }
  return console.log(ki + ' nincs benne van a tömben!');
}
van = vanE_2(names, 'Andrea');

// 2. feladat

// function sum(tomb) {
//   let result = 0;
//   for (let i = 0; i < tomb.length; i++) {
//     result += tomb[i];
//   }
//   return result;
// }

// const nums = [4, 2, 2, 1, 1];
// let sum_var;
// console.log('Az eredmény: ' + (sum_var = sum(nums)));


// 3. feladat

// function sum(tomb) {
//   let result = 0;
//   for (let i = 0; i < tomb.length; i++) {
//     if (typeof (tomb[i]) !== 'number') {
//       console.log('Az alábbi elem: ' + '-' + tomb[i] + '-' + ' nem szám!');
//     } else {
//       result += tomb[i];
//     }
//   }
//   return result;
// }

// const nums_2 = ['a', true, '2', '2', '1', 1];
// let sum_var_2;
// console.log('Az eredmény: ' + (sum_var_2 = sum(nums_2)));

// 4.feladat

// function sum_advance(tomb) {
//   let result = 0;
//   for (let i = 0; i < tomb.length; i++) {
//     if (typeof (tomb[i]) !== 'number') {
//       if (isNaN(parseInt(tomb[i]))) {
//         console.log('Az alábbi elem: ' + '[' + tomb[i] + ']' + ' nem szám!');
//         continue;
//       }
//     }
//     result += parseInt(tomb[i]);
//   }
//   return result;

// }
// console.log('Az eredmény: ' + (sum_var_2 = sum_advance(nums_2)));
