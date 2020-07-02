import { Store } from 's-is-for-store'
import store, { initialState } from './counterStore'

describe('counterStore', () => {
  it('Should create a counter store.', () => {
    expect(store).toBeInstanceOf(Store)
  })

  it('Should have the correct initial state.', () => {
    expect(store.current()).toEqual(initialState)
  })
})
