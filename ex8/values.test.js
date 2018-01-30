const { wrap, attachTitle } = require('./values');

test('promise chain gets resolved', (done) => {
  const call = (value) => {
    expect(value).toBe('DR. MANHATTAN');
    done();
  };

  wrap(call);
});

describe('check attach Title function', () => {
  it('should append DR. to a string', () => {
    expect(attachTitle('DOCTOR')).toBe('DR. DOCTOR');
  });

  it('should return DR. when nothing passed', () => {
    expect(attachTitle()).toBe('DR. undefined');
  });
});
