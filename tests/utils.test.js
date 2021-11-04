const { timestamp } = require('../bin/utils');

describe('timestamp', () => {

  const date1 = new Date('December 17, 1994 10:24:00');
  const date2 = new Date('January 17, 1994 10:24:00');
  const date3 = new Date('January 1, 1994 10:24:00');
  const date4 = new Date('January 1, 1994 1:24:00');
  const date5 = new Date('January 1, 1994 1:1:00');
  const date6 = new Date('January 1, 1994 13:1:00');
  const date7 = new Date('January 1, 1994 0:0:00');

  test ('It should return a string when NOT passed an arguments', () => {
    expect(typeof timestamp()).toBe('string');
  });

  test ('It should return a string when passed an argument', () => {
    expect(typeof timestamp(date1)).toBe('string');
  });

  test('The resulting string length should be 19', () => {
    expect (timestamp(date1)).toHaveLength(19);
  });

  test('It should accurately produce a readable timestamp', () => {
    expect (timestamp(date1)).toBe('12/17/1994 10:24 am');
  });

  test('Single digit months should be converted to double-digits', () => {
    expect (timestamp(date2)).toBe('01/17/1994 10:24 am');
  });

  test('Single digit days should be converted to double-digits', () => {
    expect (timestamp(date3)).toBe('01/01/1994 10:24 am');
  });

  test('Single digit hours should be converted to double-digits', () => {
    expect (timestamp(date4)).toBe('01/01/1994 01:24 am');
  });

  test('Single digit minutes should be converted to double-digits', () => {
    expect (timestamp(date5)).toBe('01/01/1994 01:01 am');
  });

  test('afternoon should say pm', () => {
    expect (timestamp(date6)).toBe('01/01/1994 01:01 pm');
  });

  test('00 as the hour should convert to 12pm', () => {
    expect (timestamp(date7)).toBe('01/01/1994 12:00 am');
  });

});