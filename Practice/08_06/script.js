/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

header = `<h1>A heading here</h1>
    <p>Posted by John Doe</p>
    <p>Some additional information here</p>`

function AddHeader (html, append_or_prepend, element){
    let newArticle = document.createElement("article")
    let newHeader = document.createElement("header")
    let before_after = append_or_prepend
    newHeader.innerHTML = html

    newArticle.append(newHeader) 


    if (before_after == "append") {
        document.querySelector(element).append(newArticle)
    }
    else if (before_after == "prepend"){
        document.querySelector(element).prepend(newArticle)
    }
}

body = `<article>
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
  </article>`

const AddMain = function(body){
    document.querySelector("main").innerHTML = body
}

const Color = (color, element) => {
    document.querySelector(element).style.color = color
}

AddMain(body)
AddHeader(header, "prepend", "body")
Color("red","main")
