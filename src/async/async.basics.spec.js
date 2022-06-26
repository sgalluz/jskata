const assert = require('assert');

// 1: async - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`async` defines an asynchronous function', function() {

  describe('can be created by putting `async` before', () => {
    it('a function expression', function() {
      const f = async function() {};
      assert.equal(f instanceof AsyncFunction, true);
    });
    it('a function declaration', function() {
      async function f() {}
      assert.equal(f instanceof AsyncFunction, true);
    });
    it('an arrow function', function() {
      const f = async () => {};
      assert.equal(f instanceof AsyncFunction, true);
    });
    it('an object method', function() {
      const obj = {f: async () => void 0};
      assert.equal(obj.f instanceof AsyncFunction, true);
    });
  });

  describe('the return value', () => {
    it('is always a Promise', function() {
      const f = () => Promise.resolve('nö');
      assert.equal(f() instanceof Promise, true);
    });
    it('wraps the return value in a Promise', function() {
      const f = () => Promise.resolve(42);
      return f().then(v => assert.equal(v, 42));
    });
    it('is a rejected Promise when the async function throws', function() {
      const f = async () => Promise.reject(23);
      return f()
        .then(() => assert(false, 'Promise must reject (not pass)!'))
        .catch(v => assert.equal(v, 23))
      ;
    });
  });

});

// Note that AsyncFunction is not a global object.
// It could be obtained by evaluating the following code.
// see also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
