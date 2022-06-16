import * as f from "../functions";

const cases: [string, number][] = [
  ["00000000" + "00000000" + "00000000" + "00000000", 0],
  ["10000000" + "00000000" + "00000000" + "00000000", 1],
  ["11000000" + "00000000" + "00000000" + "00000000", 2],
  ["11100000" + "00000000" + "00000000" + "00000000", 3],
  ["11110000" + "00000000" + "00000000" + "00000000", 4],
  ["11111000" + "00000000" + "00000000" + "00000000", 5],
  ["11111100" + "00000000" + "00000000" + "00000000", 6],
  ["11111110" + "00000000" + "00000000" + "00000000", 7],
  ["11111111" + "00000000" + "00000000" + "00000000", 8],
  ["11111111" + "10000000" + "00000000" + "00000000", 9],
  ["11111111" + "11000000" + "00000000" + "00000000", 10],
  ["11111111" + "11100000" + "00000000" + "00000000", 11],
  ["11111111" + "11110000" + "00000000" + "00000000", 12],
  ["11111111" + "11111000" + "00000000" + "00000000", 13],
  ["11111111" + "11111100" + "00000000" + "00000000", 14],
  ["11111111" + "11111110" + "00000000" + "00000000", 15],
  ["11111111" + "11111111" + "00000000" + "00000000", 16],
  ["11111111" + "11111111" + "10000000" + "00000000", 17],
  ["11111111" + "11111111" + "11000000" + "00000000", 18],
  ["11111111" + "11111111" + "11100000" + "00000000", 19],
  ["11111111" + "11111111" + "11110000" + "00000000", 20],
  ["11111111" + "11111111" + "11111000" + "00000000", 21],
  ["11111111" + "11111111" + "11111100" + "00000000", 22],
  ["11111111" + "11111111" + "11111110" + "00000000", 23],
  ["11111111" + "11111111" + "11111111" + "00000000", 24],
  ["11111111" + "11111111" + "11111111" + "10000000", 25],
  ["11111111" + "11111111" + "11111111" + "11000000", 26],
  ["11111111" + "11111111" + "11111111" + "11100000", 27],
  ["11111111" + "11111111" + "11111111" + "11110000", 28],
  ["11111111" + "11111111" + "11111111" + "11111000", 29],
  ["11111111" + "11111111" + "11111111" + "11111100", 30],
  ["11111111" + "11111111" + "11111111" + "11111110", 31],
  ["11111111" + "11111111" + "11111111" + "11111111", 32],
];

test.each(cases)("binMasktoCidr( %s ) should return %s", (bin, dec) => {
  expect(f.binMasktoCidr(bin)).toBe(dec);
});
