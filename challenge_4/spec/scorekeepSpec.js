var assert = chai.assert,  
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

describe('First test', function() {  
  describe('#sayHello()', function() {
    var foobar = {  
      sayHello: function() {
        return 'Hello world!';
      }
    };
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
  
  describe('Scorekeep.testMethod()', function() {
    var score = new Scorekeep('hello there');
    it('should be able to use testMethod', function() {
      assert.equal(score.testMethod(), 'hello there');
    })
  })
})



