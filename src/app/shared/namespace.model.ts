import { Datatype } from './datatype.model';

export class Namespace {
  types: Array<Datatype> = [];

  constructor(public name: string) { }
}
