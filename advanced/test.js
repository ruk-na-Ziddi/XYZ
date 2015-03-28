var chai=require('chai');
var assert=chai.assert;
var expect=chai.expect;
var should=chai.should();
var num =5;



before(function() {
  console.log('before--------------->');
});
after(function(){
  console.log('after----------------->')
});
beforeEach(function(){
  console.log('beforeEach===========>')
});
afterEach(function(){
  console.log('afterEach**************')	
});
 
describe('Array', function(){
  describe('hooks', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });

	});
    describe('hooks', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });

	});
	describe('hooks', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });

	}); 
})
describe('Array', function(){
  describe('#indexOf()', function(){
    it.skip('should return -1 unless present', function(){
    	assert.equal(-1, [1,2,3].indexOf(5));
      	assert.equal(-1, [1,2,3].indexOf(0));
      	[1,2,3].indexOf(5).should.equal(-1);
      	[1,2,3].indexOf(0).should.equal(-1);
    })

    it('should return the index when present', function(){
    	[1,2,3].indexOf(1).should.equal(0);
      	[1,2,3].indexOf(3).should.equal(2);
    })
  })
})

describe("a test", function(){
  var foo = false;
  beforeEach(function(done){
    setTimeout(function(){
      foo = true;
      done();
    }, 100);
  });
  it("should pass", function(){
    expect(foo).equals(true);
  });
});