var testString = "";

function reversal() {

  getText();
  var x = textArea.value.split("");
  var y =  x.reverse();
  var reversed = y.join("");
  printInDOM.innerHTML += " Reversed: " + reversed;
  testString += reversed;
}

function alphabits() {
  getText();
  var x = textArea.value.split("");
  var y = x.sort();
  var z = y.join("");
  printInDOM.innerHTML += " Alphabetized: " + z;

}

function palindrome() {
    getText();
    var arr = textArea.value;
    mid = Math.ceil(arr.length/2),
    obj = {
        left: arr.slice(0, mid),
        right: arr.slice(mid),
        }
        
        function palindromeReverse() {
          var x = obj.right;
          var y = x.split("");
          var z =  y.reverse();
          return z.join("");
        }

        console.log("obj.right reversed", palindromeReverse(obj.right));
        console.log("obj.left", obj.left);

        if (obj.left === palindromeReverse(obj.right)) {
          printInDOM.innerHTML += " PALINDROME. ";
        } else if (obj.left.length > obj.right.length) {
            var z = obj.left.slice(0, obj.left.length -1);
            console.log("var z", z);
            if (z === palindromeReverse(obj.right)) {
              printInDOM.innerHTML += " PALINDROME. ";
            } else {
                printInDOM.innerHTML += " Not a palindrome. ";
              }
          } else { 
              printInDOM.innerHTML += " Not a palindrome. ";
            }
            
};


var textArea = document.getElementById("textArea");
var printInDOM = document.getElementById("printInDOM");

function getText (functionToRun) {
  var patt = new RegExp("^[A-Za-z]+$");
  var res = patt.test(textArea.value);
  console.log("result boolean", res);
  if (res === false) {
    printInDOM.innerHTML = "Whoops, only letters are allowed in the textbox..."
  } else {
    testString = textArea.value 
    console.log("testString:", testString);
    }

}

function submitAll() {
  reversal();
  alphabits();
  palindrome();
}

var palindromeButton = document.getElementById("palindromeButton");

var alphaButton = document.getElementById("alphaButton");

var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", submitAll);

palindromeButton.addEventListener("click", palindrome);

reverseButton.addEventListener("click", reversal);

alphaButton.addEventListener("click", alphabits);

document.getElementById("textArea")
 .addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    submitAll();
  }
})
