'use strict';

var fs = require('fs');

var buf = fs.readFileSync('palette-bitmap.bmp');
console.log(buf.toString('utf8', 0, 2));
var palette = buf.slice(54 , 182);
console.log(palette);

function Transformer(arr) {
  this.toGrayScale = function(arr) {
    var testSlice= [];
    var pixTotal = 0;
    var pixAve = 0;
    for (var j = 0; j < (arr.length - 3); j += 4){
      testSlice = arr.slice(j, j+3);
      for (var i = 0; i < 3; i++){
        pixTotal += testSlice[i];
      };
      pixAve = pixTotal/3;
      for (var i = 0; i < 3; i++){
      testSlice[i] = pixAve;
      };
    };
  };
};
var transformer = new Transformer;
transformer.toGrayScale(palette);
fs.writeFile('palette-bitmap2.bmp', buf, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});










