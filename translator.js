// ma zrobic z 1994 'MCMXCIV'

const roman = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

// function romanCalc(number) {

let result = 0;
let str = '';

function translator(number) {
  Object.entries(roman).reverse().reduce(function(p, c, index, a) {
    let result = Math.floor(p / c[0]);
    if (result > 0) {
      str += c[1].repeat(result);
    }
    return p % c[0];
  }, number);

  return str;
}

console.log(translator(1800));



