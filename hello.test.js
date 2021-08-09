const { greeter } = require('./hello');

describe('greeter', () => {
  it('greets', () => {
    expect(greeter()).toEqual('Hello, World!');
  });
});
