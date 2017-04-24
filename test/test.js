'use strict';

/*
Setup testing environment
=========================
*/
//Testing modules
var test = require('tidytest');

//Module to test
var uuid = require('../index.js');

/*
Tests
=====
*/
test('uuid()', function(assert){
    assert.plan(2);

    assert.doesNotThrow(function (){return uuid();}, 'no error thrown');
    assert.equal(uuid().length, 32, 'returns UUID with 32 length');
});
