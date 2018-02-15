var assert = chai.assert,  
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

var foobar = {  
  sayHello: function() {
    return 'Hello world!';
  }
};

describe('First test', function() {  
  describe('#sayHello()', function() {
    it('should work with assert', function() {
      assert.equal(foobar.sayHello(), 'Hello world!');
    })
  })
});

describe('Basic Scorekeep tests', function() {
  describe('testFunc()', function() {
    it('should be able to use testFunc', function() {
      assert.equal(testFunc(), 'test function');
    })
  })
  
  
})



