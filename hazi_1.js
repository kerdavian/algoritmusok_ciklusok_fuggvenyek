// 1. feladat
const nums = [3, 4, 9, 6, 2];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i] + ':' + 'osztható');
  } else {
    console.log(nums[i] + ':' + 'nem osztható');
  }
}

// 2. feladat
const player = ['Péter', 'Kate', 'John'];
for (let i = 0; i < player.length; i++) {
  // ez írja ki az indexet
  // console.log(i + '. ' + player[i]);

  // A példa nem az idexet írjaki, hanem a sorszámot
  console.log(i + 1 + '. ' + player[i]);
}

// 3.feladat
function tipusVizsgalo(tomb) {
  let tipus_tomb = [];
  for (let i = 0; i < tomb.length; i++) {
    tipus_tomb.push(typeof (tomb[i]));
  }

  return tipus_tomb;
}
const x = ['', 4, true];
let eredmeny_tomb = tipusVizsgalo(x);

console.log(eredmeny_tomb);

