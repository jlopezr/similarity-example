var stringSimilarity = require('string-similarity');

var similarity = stringSimilarity.compareTwoStrings('healed', 'sealed');
console.dir(similarity);

var matches = stringSimilarity.findBestMatch('tortilla patatas cocidas', ['tortilla de patatas', 'tortilla de patatas con patatas cocidas', 'tortilla de patatas con bacon']);
console.dir(matches);
