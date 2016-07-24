
describe('Foo', function(){
    it('should test stuff', function(){
        var foo = require('../src/foo');
        foo.should.have.property('bar', true);
    });
});