var stringSimilarity = require('string-similarity');
var sjs = require('simhash-js');
var simhash = new sjs.SimHash();



/*
var similarity = stringSimilarity.compareTwoStrings('healed', 'sealed');
console.dir(similarity);

var matches = stringSimilarity.findBestMatch('tortilla patatas cocidas', ['tortilla de patatas', 'tortilla de patatas con patatas cocidas', 'tortilla de patatas con bacon']);
console.dir(matches);
*/

//var input1 = "quieror cucinar turtilla de patatas";
var input1 = "quieror cucinar";
var input2 = [
  "Quiero cocinar",
  "Quiero hacer",
  "Ayuda",
  "Selecciona",
  "Si",
  "Busca",
  "Marcalo como favorita",
  "Añadelo como favorita"
];

/*
var matches = stringSimilarity.findBestMatch(input1, input2);
console.dir(matches);

var matches = stringSimilarity.findBestMatch("quieror", ['quiero']);
console.dir(matches);

var matches = stringSimilarity.findBestMatch("cucinar", ['cocinar']);
console.dir(matches);
*/

var x = simhash.hash("quiero cocinar");
var y = simhash.hash("quiero cocinar");

var s = sjs.Comparator.similarity(x, y);
console.dir(s);