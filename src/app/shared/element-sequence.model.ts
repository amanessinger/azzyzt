export class ElementSequence<T> {
  elements: Array<T> = [];

  add(e: T): void {
    this.elements.push(e);
  }

  contains(e: T): boolean {
    return this.elements.find((el) => el === e) != null;
  }

  assertIndex(index: number) {
    if (index < 0 || index >= this.elements.length) {
      throw new RangeError('Index ' + index + ' outside of sequence');
    }
  }

  size(): number {
    return this.elements.length;
  }

  move(e: T, toIndex: number): void {
    let currentIndex = this.elements.indexOf(e);
    if (currentIndex === -1) {
      throw new Error('Element ' + e + ' not found');
    }
    this.assertIndex(toIndex);
    this.elements.splice(currentIndex, 1);
    this.elements.splice(toIndex, 0, e);
  }

  get(index: number): T {
    this.assertIndex(index);
    return this.elements[index];
  }
}
