## Using Matchers

Jest uses 'matchers' to let you test values in different ways.

### Common Matchers
- toBe
- toEqual
- not.toBe()

### Truthiness

In tests, you sometimes need to distinguish between `undefined`, `null` and `false` but you sometimes do not want to treat these differently

- `toBeNull` matches only `null`
- `toBeUndefined` matches only `undefined`
- `toBeDefined` is the opposite of `toBeUndefined`
- `toBeTruthy` matches anything that an if statement treats as true
- `toBeFalsy` matches anything that an if statement treats as false