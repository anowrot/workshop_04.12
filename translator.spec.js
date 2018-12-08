const {translator} = require('./translator');


test("output should be MDCC", () => {
  expect(translator(1994)).toEqual('MCMXCIV');
});