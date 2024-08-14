/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Villan from "./Backpack.js"

const Jeff = new Villan(
    "Jeff",
    "Male",
    "Jeff's Play"
)

console.log("This is Jeff:", Jeff)
Jeff.checkForLines()
console.log("This is Jeff:", Jeff)
Jeff.giveLines("I forgot my lines...")
console.log("This is Jeff:", Jeff)
Jeff.showLines()

document.body.innerHTML = `This is Jeff. /n Tell them your lines Jeff /n ${Jeff.lines}`