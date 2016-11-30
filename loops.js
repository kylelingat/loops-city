var count;

for (count = 0; count <= 100; count++){
  console.log(count);
}



var animalCount; 

for (animalCount = 0; animalCount < 6; animalCount++) {
  console.log(animalCount);
  console.log('there are ' + animalCount + ' many animals in Noahs Arc');
}

var partyAnimals = ["lion", "dog", "cat", "bear", "tree"];
var adj = ["green", "orange", "small", "grey", "ugly"]

for (var i in partyAnimals) {
  console.log('the ' + partyAnimals[i] + ' is ' + adj[i]);
}

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];

var hero = [
  wizard = "Merlin",
  weapon = weaponChest[2],
  power = 30
];

if (hero[1] == weaponChest[1]) {
  console.log(hero[0] + ' shall slay the dragon with the ' +  hero[1]);
}
  else {
    hero[1] = weaponChest[1];
    console.log(hero[0] + ' is ready for war with the ' + hero[1]);
  }
