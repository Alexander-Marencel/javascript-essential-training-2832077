/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */


// const Change_it = {
//     add_classes(
//      selector, 
//      new_classes
//     ){ 
//         document.querySelectorAll('"'+ selector + '"').forEach(i => i.classList.add("lid-toggle", "feature"))  
//     }

// }
document.querySelectorAll(".backpack").forEach(i => i.classList.add("lid-toggle", "feature"))

document.querySelector("#pack02").classList.remove("feature")

document.querySelector("#pack02 img").setAttribute("src", "https://purepng.com/public/uploads/large/purepng.com-cherriescherrygenus-prunussweet-cherryornamental-cherrycherry-blossomcherries-1701527198162wctcb.png")
document.querySelector("#pack02 img").setAttribute("height", "200")
document.querySelector("#pack02 img").setAttribute("width", "200")

document.querySelector("#pack01 .leftlength input").setAttribute("placeholder", "hello, im jeff")

document.querySelector("#pack02 .leftlength button").style.borderBlockColor = "red"