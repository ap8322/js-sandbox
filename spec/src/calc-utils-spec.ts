/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import {CalcUtils} from '../../src/calc-utils';

describe('関数のテスト', () => {
  it('1 + 1 = 2である', () => {
    expect(CalcUtils.add(1, 1)).toBe(2);
  });

  it('1 + 2 = 3である', () => {
    expect(CalcUtils.add(1, 2)).toBe(3);
  });
});
