import * as mobx from 'mobx';
import { makeObservable } from 'mobx';

export class Store {
  foo: boolean = false;

  constructor() {
    makeObservable(this, {
      foo: mobx.observable.ref
    });
  }
}