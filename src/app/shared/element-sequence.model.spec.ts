import {ElementSequence} from "./element-sequence.model";

describe('Generic class §lementSequence', () => {

  it('should create an instance', () => {
    let strings = new ElementSequence<string>();
    expect(strings).toBeTruthy();
    let numbers = new ElementSequence<number>();
    expect(numbers).toBeTruthy();
  });

  it('should add a string', () => {
    const s = "test";
    let strings = new ElementSequence<string>();
    strings.add(s);
    expect(strings.contains(s)).toBeTruthy();
    expect(strings.size()).toBe(1);
  });

  it('should move an element', () => {
    let elems: Array<number> = [1, 2, 3, 4];
    let nums = new ElementSequence<number>();
    elems.forEach((el => nums.add(el)));
    nums.move(elems[2], 1);
    expect(nums.get(0)).toBe(elems[0]);
    expect(nums.get(1)).toBe(elems[2]);
    expect(nums.get(2)).toBe(elems[1]);
    expect(nums.get(3)).toBe(elems[3]);
  });

  it('should be impossible to move en element outside', () => {
    let elems = [1, 2, 3, 4];
    let noIndices = [-1, elems.length];

    let nums = new ElementSequence<number>();
    elems.forEach(el => nums.add(el));
    noIndices.forEach(nidx => {
      try {
        nums.move(elems[2], nidx);
        expect('reaching this line').toBe('impossible');
      } catch (e) {
        expect(typeof e === 'RangeError');
      }
    });
  });

;});
