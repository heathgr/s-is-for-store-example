import { Store } from 's-is-for-store'
import store from './rootStore'

describe('rootStore', () => {
  it('Should create a store.', () => {
    expect(store).toBeInstanceOf(Store)
  })
})
