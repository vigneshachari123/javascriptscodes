//String casing excercise for convert firstletter to uppercase.
var name =prompt("Enter your name");
var firstletter = name.slice(0,1);
var ucasefirstltr= firstletter.toUpperCase();
var restofletters = name.slice(1,name.length);

alert("hello ," +ucasefirstltr+""+restofletters);
