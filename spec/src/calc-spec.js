describe('関数のテスト', function() {
  // 成功するテスト
  it('1 + 1 = 2である', function(){
    expect(add(1, 1)).toBe(2);
  });

  // 失敗するテスト
  it('1 + 2 = 3である', function(){
    expect(add(1, 2)).toBe(3);
  });
});
