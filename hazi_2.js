// az evidens dolgokat már nem kommentelem!!!
// 1. feladat
// while ciklusaal

const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];

function vanENev(miben, ki) {
  let i = 0;
  // do while ciklus
  do {
    // abelsejében levizsgálunk valami eseményt
    if (miben[i] === ki) { //ha benne van
      console.log(ki + ' a ' + parseInt(i + 1) + '. helyen található a tömbben!'); //kiirjuk, hogy benne van és hogy hol
      return; // kiléünk a ciklusból
    }
    i++; // növelni kell az i változóértékét, hogy ne kerüljünk végtelen ciklusba
  }
  while (i < miben.length); // addig megyünk,amilyen hosszú a paraméterként kapott miben tömb
  console.log(ki + ' nem található a tömbben!'); // kilogoljuk, hogy a ki mrgtalálható-e a tömbben
}

vanENev(names, 'Gábor');
vanENev(names, 'István');
vanENev(names, 'Andrea');


// 1. feladat
// for ciklussal
// probálgatások - az indexet adjuk vissza. Ha a sorszámát akarnánk akkor i+1
function vanE(miben, ki) {
  //let benne_van = false; // deklaráunk egy noolean tipusu változót,aminek alaéprtelmezetten a false értéket adjuk
  for (let i = 0; i < miben.length; i++) { // végig megyünk a miben paraméter tömbön
    if (miben[i] === ki) { return i; } // ha benn van, akkor vissztérünk az i-vel benne_van változó =true benne_van = true;
  }
  return -1; // ha nincs benne akkor minus eggyel
}

// ez a változat szerintem programozósabb, úgyanis a függvény azt mondja meg nekünk hogy a keresett néz hányadik helyen van. Ezután mi eldönthetjük mit akarunk kezdeni ezzel az infóval
let nev = 'Attila';
let van = vanE(names, nev);
if (van > 0) {
  console.log(nev + ' benne van a tömbben a(z) ' + (van + 1) + ' .helyen!');
} else {
  console.log(nev + 'nincs a tömbben');
}


// 1. feladat
// probálgatások 2 - az indexet adjuk vissza. Ha a sorszámát akarnánk akkor i+1
// ez gyakorlatilag az előző feladat csak rögtön logoljuk az eredményt
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
function sum(tomb) {
  let result = 0; // kell egy változó ami az összeget fogja tárolni
  for (let i = 0; i < tomb.length; i++) {
    result += tomb[i]; // mindig növeljül a result értékét a tomb paraméter i. elemének értékével.
  }
  return result; // vissztérünk az eredménnyel
}

const nums = [4, 2, 2, 1, 1];
let sum_var;
console.log('Az eredmény: ' + (sum_var = sum(nums)));


// 3. feladat

function sum(tomb) {
  let result = 0;
  for (let i = 0; i < tomb.length; i++) {
    if (typeof (tomb[i]) !== 'number') { // levizsgáljuk, hogy a tömb paraméter i. elemé
    } else {
      result += tomb[i]; // ha igen
    }
  }
  return result; // visszatérünk az eredénnyel, de csak a number tipusokat adtuk össze
}

const nums_2 = ['a', true, '2', '2', '1', 1];
let sum_var_2;
console.log('Az eredmény: ' + (sum_var_2 = sum(nums_2)));



// 4.feladat

function sum_advance(tomb) {
  let result = 0;
  for (let i = 0; i < tomb.length; i++) {
    if ((typeof (tomb[i]) !== 'number') && (isNaN(parseInt(tomb[i])))) { // ha tomb paraméter i. elemének a típusa nem number és átalakítva sem number lesz akkor
      console.log('Az alábbi elem: ' + '[' + tomb[i] + ']' + ' nem szám!'); // nem számolunk vele
      continue; // következeő iteráció
    }
    //ha tomb paraméter i. elemének a típusa nem number édes átalakítva number lesz akkor
    result += parseInt(tomb[i]); // az adot elem értékével növeljük a result értékét
  }
  return result;

}
console.log('Az eredmény: ' + (sum_var_2 = sum_advance(nums_2)));
