'use strict';

var _ = require('lodash');
var fs = require('fs');

//var buf = new Buffer();
var buf = fs.readFile('palette-bitmap.bmp', function(err,data){
  if (err) return console.log('error');

  console.log(data);
});
console.log(buf);


function Transformer(arr) {
  this.toGrayScale = function(arr) {

    var string = _.chunk((arr), 4);

    console.log(string);
    console.log(string[0][3]);
    console.log(string[1][3]);
    console.log(string[2][3]);
    console.log(string[3][3]);


  };
};

//var sampleArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

var transformer = new Transformer;
//transformer.toGrayScale(buf);
