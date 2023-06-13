const mathOperations = require('./calculator');
describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.diff(1, 2)).toBe(3);
      });
   })
