// 1. feladat
const nums = [3, 4, 9, 6, 2]; //tömd deklarációés értékadás

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) { //osztható-e kettővel
    console.log(nums[i] + ':' + 'osztható'); // ha igen
  } else {
    console.log(nums[i] + ':' + 'nem osztható'); // ha nem
  }
}

// 2. feladat
const player = ['Péter', 'Kate', 'John']; //tömd deklarációés értékadás
for (let i = 0; i < player.length; i++) { // végig itelárunk a tömbön

  // ez írjné ki ki az indexet
  // console.log(i + '. ' + player[i]);

  // A példa nem az idexet írjaki, hanem a sorszámot
  console.log(i + 1 + '. ' + player[i]);
}

// 3.feladat
function tipusVizsgalo(tomb) { //függvény deklaráció
  let tipus_tomb = []; // tömb deklaráció
  for (let i = 0; i < tomb.length; i++) { // végig itelárunk a tömbön
    tipus_tomb.push(typeof (tomb[i])); // a tipus_tomb-hoz hozzáfűzzük a paraméterként kapot tomb változó i. eleménektípusát
  }

  return tipus_tomb; // visszatérünk a tipus_tömbbel, ami tartalmazza a paraméterként kapott tömb változó elemeit
}
const elemek = ['', 4, true]; // deklarálunk egy tömböt tés adunk neki értéket
let eredmeny_tomb = tipusVizsgalo(elemek); // meghívjuk a típusVizgálófüggvény az elemek tömb-bel és azt az értéket amivel a függvény visszatér értéküladjük az eredemny_tombváltozonak.

console.log(eredmeny_tomb); //kilogoljuk az eredmény_tomb értékét

