"use script";

//  alert("Hello, world!");

var myVariable;
myVariable = 10;
console.log( myVariable );

var myString;
myString = "Hello, world!";
console.log( myString );

var myBoolean = false;
console.log ( myBoolean );

// if-else
var myNull = null;
console.log ( myNull );

var myUndefined = undefined;
console.log ( myUndefined );

var season = "spring";

if (season === "autumn") {
  console.log("Ура! Осень!");
}
else {
console.log("Не осень!:()")
}

//loop "for"


var number;
for (number = 0; number < 10; number ++) {
// alert("Давайте посчитаем от 0 до 9: " + number);
}

// function

function multiply(number1, number2,number3) {
  var result = number1 * number2 * number3;
  return result;

}

console.log (multiply(1,2,3));

console.log (multiply(2,3,4));


// DOM

var myArticle = document.getElementByID("article-1");
myArticle.classList.remove("myClass");

var showMe = getElementById ( "show-me");
showMe.onclick = function() {
  alert ('А вот и я!');
}

var eventListener = document.getElementById("eventListener");
eventListener.addeventListener('click', function(){
  this. classList.toggle("toggled");

});
