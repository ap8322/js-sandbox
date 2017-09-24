var calcutils = require('../../src/calc-utils');

describe('関数のテスト', function() {
  it('1 + 1 = 2である', function(){
    expect(calcutils.add(1, 1)).toBe(2);
  });

  it('1 + 2 = 3である', function(){
    expect(calcutils.add(1, 2)).toBe(3);
  });
});
