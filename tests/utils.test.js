const { timestamp } = require('../bin/utils');

describe('timestamp', () => {

  const date1 = new Date('December 17, 1995 03:24:00');
  const date2 = new Date('1995-12-17T03:24:00')

  test ('It should return a string with no arguments', () => {
    expect(typeof timestamp()).toBe('string');
  });

  test ('It should return a string with an argument', () => {
    expect(typeof timestamp(date1)).toBe('string');
  });

  test('The resulting string length should be 19', () => {
    expect (timestamp(date1)).toHaveLength(19);
  });

  test('It should accurately produce a readable timestamp', () => {
    expect (timestamp(date1)).toBe('12/17/1995 03:24 am');
  });

  test('It should produce consistent results when equivalent dates are calculated', () => {
    expect (timestamp(date1)).toBe(timestamp(date2));
  });

});