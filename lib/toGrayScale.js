'use strict';

module.exports = function(arr) {
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
  return testSlice;
};
