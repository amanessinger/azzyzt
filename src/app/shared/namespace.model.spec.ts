import {Namespace} from "./namespace.model";
import {Datatype} from "./datatype.model";

describe('Class: Namespace', () => {

  const ns = "org.azzyzt.testing";

  it('should create an instance', () => {

      let instance = new Namespace(ns);
      expect(instance).toBeTruthy();
    });

    it('should contain a new datatype created within', () => {
      let instance = new Namespace(ns);
      let dt = new Datatype(instance, "a");
      expect(instance.types.length).toBe(1);
      expect(instance.types[0].name).toBe(dt.name);
    });
});
