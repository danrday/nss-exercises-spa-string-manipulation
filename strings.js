function reversal(word) {
  var x = textArea.value.split("");
  var y =  x.reverse();
  var reversed = y.join("");
  printInDOM.innerHTML = reversed;
}

function alphabits() {

}

function palindrome() {
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

        console.log(palindromeReverse(obj.right));
        console.log(obj.left);

        if (obj.left === palindromeReverse(obj.right)) {
          alert("palindrome");
        } else if (obj.left.length > obj.right.length) {
            var z = obj.left.slice(0, obj.left.length -1);
            if (z === palindromeReverse(obj.right)) {
              alert("palindrome");
        }      } else { 
                alert("not a palindrome");
                }
            
            };



// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

var textArea = document.getElementById("textArea");
var printInDOM = document.getElementById("printInDOM");

function getText () {
  var patt = new RegExp("^[A-Za-z]+$");
  var res = patt.test(textArea.value);
  console.log("result boolean", res);
  if (res === false) {
    printInDOM.innerHTML = "Whoops, only letters are allowed in the textbox."
  } else {
    printInDOM.innerHTML = "";
   reversal(textArea.value);
  }

}

var palindromeButton = document.getElementById("palindromeButton");

var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", getText);

palindromeButton.addEventListener("click", palindrome);

reverseButton.addEventListener("click", reversal);
