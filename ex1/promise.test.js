const timeout = require('./promise');

global.console = { log: jest.fn() };

test('should pass TIMED OUT! to console', () => {
  timeout();
  expect(console.log).toHaveBeenCalledWith('TIMED OUT!');
});
