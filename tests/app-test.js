var request = require('superagent');
var expect = require('chai').expect;

describe('General app tests', function() {
    it('should say hello', function(done) {
        request.get('localhost:8080/hello').end(function(res) {
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            expect(res.text).to.contain('Hello, World!');
            done();
        });
    });
});