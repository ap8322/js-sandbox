describe('関数のテスト', function() {
  it('1 + 1 = 2である', function(){
    expect(add(1, 1)).toBe(2);
  });

  it('1 + 2 = 3である', function(){
    expect(add(1, 2)).toBe(3);
  });

  it('1 + 3 = 4である', function(){
    expect(add(1, 3)).toBe(4);
  });
});
