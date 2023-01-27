const Fibonacci = require('./fibonacci');

test('when n=-5, it returns []',() => {
    let fibonacci = new Fibonacci(-5);
    expect(fibonacci.getResult()).toEqual([]);
});

test('when n=0, it returns []',() => {
    let fibonacci = new Fibonacci(0);
    expect(fibonacci.getResult()).toEqual([]);
});

test('when n=1, it returns [0]',() => {
    let fibonacci = new Fibonacci(1);
    expect(fibonacci.getResult()).toEqual([0]);
});

test('when n=3, it returns [0 1 1]',() => {
    let fibonacci = new Fibonacci(3);
    expect(fibonacci.getResult()).toEqual([0, 1, 1]);
});

test('when n=5, it returns [0, 1, 1, 2, 3]',() => {
    let fibonacci = new Fibonacci(5);
    expect(fibonacci.getResult()).toEqual([0, 1, 1, 2, 3]);
});

test('when n=10, it returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',() => {
    let fibonacci = new Fibonacci(10);
    expect(fibonacci.getResult()).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('when n=20, it returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]',() => {
    let fibonacci = new Fibonacci(20);
    expect(fibonacci.getResult()).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]);
});