import { Store } from '../store';

describe('store', () => {
  it('should match', () => {
    const store = new Store();
    store.foo = false;
    const anotherStore = new Store();
    expect(store).toMatchObject(anotherStore);
  })
})