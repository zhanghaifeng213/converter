const expect = require('chai').expect;
const converter = require('../app/converter');

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