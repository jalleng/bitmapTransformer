'use strict';

var grayscale = require('../lib/toGrayScale');
var expect = require('chai').expect;
var fs = require('fs');

var infile = fs.readFileSync(__dirname +'/../lib/testpat_pal.bmp');
var initial = infile.slice(54 , 61);
var outfile = fs.readFileSync(__dirname +'/../lib/testpat_pal2.bmp');
var out = outfile.slice(54, 61)

describe('grayscale', function() {
  it('should assign the average of the subpixels to each subpixel', function() {
    expect(grayscale(initial)).to.eql(out);
  });
});
