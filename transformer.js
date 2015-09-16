'use strict';

var fs = require('fs');

fs.readFile('./lib/palette-bitmap.bmp', function (err, data) {
  if (err) throw err;
  var palette = data.slice(54 , 182);
  var testSlice= [];
  var pixTotal = 0;
  var pixAve = 0;
  for (var j = 0; j < (palette.length - 3); j += 4){
    testSlice = palette.slice(j, j+3);
    for (var i = 0; i < 3; i++){
      pixTotal += testSlice[i];
    }
    pixAve = pixTotal/3;
    for (i = 0; i < 3; i++){
    testSlice[i] = pixAve;
    }
  }
  fs.writeFile('./lib/palette-bitmap3.bmp', data, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
  });
});








