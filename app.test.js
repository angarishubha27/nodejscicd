const sum = (a, b) => {
    return a + b;
};

test('adds two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
});

test('adds zero correctly', () => {
    expect(sum(10, 0)).toBe(10);
});