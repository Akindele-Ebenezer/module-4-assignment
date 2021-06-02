var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var greet1 = "Hello";
var greet2 = "Goodbye";
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      console.log(greet2 + " " + names[i]);  
    } else {
 	console.log(greet1 + " " + names[i]);
      }
}  





