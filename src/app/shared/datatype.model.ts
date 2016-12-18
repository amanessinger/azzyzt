import {Namespace} from './namespace.model';

export class Datatype {
  constructor(public namespace: Namespace, public name: string) {
    this.namespace.types.push(this);
  }
}
