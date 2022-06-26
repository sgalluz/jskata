const assert = require('assert');

// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a function to a generator', () => {
  it('the generator can receive a function as a value', function() {
    let fn = function() {};
    function* generatorFunction() {
      assert.equal(yield null, fn); // remember, don't touch this line
    }
    let iterator = generatorFunction();
    iterator.next();
    iterator.next(fn);
  });
  it('pass a function to the iterator, which calls it', function() {
    const fn = _ => 2;
    function* generatorFunction() {
      yield (yield 1)();
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(fn).value];
    assert.deepEqual(iteratedOver, [1, 2]);
  });
  it('nesting yielded function calls', function() {
    const fn = _ => 2;
    function* generatorFunction() {
      yield (yield (yield 1)());
    }
    var iterator = generatorFunction();
    var iteratedOver = [
      iterator.next().value,
      iterator.next(fn).value,
      iterator.next(fn() + 1).value
    ];
    assert.deepEqual(iteratedOver, [1, 2, 3]);
  });
});
