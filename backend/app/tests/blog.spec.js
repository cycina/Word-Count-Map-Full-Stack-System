const expect = require('chai').expect;
const request = require('supertest');
const app = require("../../server");


describe('GET /api/posts', function () {
    it('should return the current word count map', function () {
        return request(app)
            .get('/api/posts')
            .then(function (res) {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.not.be.empty;
            });
    });
});