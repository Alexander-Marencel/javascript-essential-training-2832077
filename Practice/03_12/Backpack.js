/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}


const Character = class {
  constructor ( 
      name,
      gender,
      play_name
  )
  {
  this.name = name;
  this.gender = gender;
  this.play_name = play_name;

  }
  giveLines(script){
      this.lines = script;
  }

  checkForLines(){
      this.giveLines("")
      if (this.lines.length > 0){
          console.log("Yes, this character has lines");
      }
      else {
          console.log("No, this character doesn't have lines");
      }
  }

  showLines(){
    console.log("These are " + this.name + "'s lines: "+this.lines)
  }
}

const Villan = class extends Character{
  constructor(
    name,
    gender,
    play,
    nemesis
  ){
    super(name, gender, play);
    this.nemesis = nemesis;
  }

  showLines(){
    super.showLines();
      console.log("Said in a menacing tone")
    }
  }




export default Villan; Character; Backpack;