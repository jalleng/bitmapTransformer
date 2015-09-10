'use strict';

var fs = require('fs');

var buf = fs.readFileSync('palette-bitmap.bmp');
//console.log(buf.toString('utf8', 0, 2));
var palette = buf.slice(54 , 182);



var transformer = new Transformer;
transformer.toGrayScale(palette);
fs.writeFile('palette-bitmap3.bmp', buf, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
