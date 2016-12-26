import {Namespace} from './namespace.model';
import {DatatypeMember} from './datatype-member.model';

export class Datatype {
  members: DatatypeMember[] = [];

  constructor(public namespace: Namespace, public name: string) {
    this.namespace.types.push(this);
  }
}
