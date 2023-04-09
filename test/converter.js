const expect = require('chai').expect;
const converter = require('../app/converter');
const request = require('request');

describe("颜色转化器测试", function() {
    // 测试用例

    // 测试rgb转换到hex
    describe("rgb转换到hex", function() {
        it("基本测试", function() {
            // 测试转换是不是生效
            const redHex = converter.rgbToHex(255, 0, 0);
            expect(redHex).to.equal('ff0000');
        });
    });
    // hex转换到rgb
    describe("hex转换到rgb", function() {
        it("基本测试", function() {
            // 测试转换是不是生效
            const red = converter.hexToRgb('ff0000');
            expect(red).to.deep.equal([255, 0, 0]);
        });
    });

})

describe("颜色转化器服务测试", function() {
    // 测试用例

    // 测试rgb转换到hex
    describe("rgb转换到hex", function() {
        const url = "http://localhost:3000/rgbToHex?red=255&green=0&blue=0"
        it("服务可用，返回200", function(done) {
            // 测试服务可用
            request(url, function(err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
        it("hex数值返回", function(done) {
            // 测试转换是不是生效
            request(url, function(err, response, body) {
                expect(body).to.equal('ff0000')
                done();
            })
        });
    });
    // hex转换到rgb
    describe("hex转换到rgb", function() {
        const url = "http://localhost:3000/hexToRgb?hex=ff0000"
        it("服务可用，返回200", function(done) {
            // 测试服务可用
            request(url, function(err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
        it("hex数值返回", function(done) {
            // 测试转换是不是生效
            request(url, function(err, response, body) {
                expect(body).to.equal('[255,0,0]');
                done();
            })
        });
    });

})