const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  let nickName = "";
  if (strokes == 1){
    nickName = names[0];
  } else if (strokes <= par - 2) {
    nickName = names[1];
  } else if (strokes == par - 1) {
    nickName = names[2];
  } else if (strokes == par) {
    nickName = names[3];
  } else if (strokes == par + 1) {
    nickName = names[4];
  } else if (strokes == par + 2) {
    nickName = names[5];
  } else if (strokes >= par + 3) {
    nickName = names[6];
  }

  return nickName;
  // Only change code above this line
}

console.log(golfScore(5, 4));