import store, { initialState } from '../store/rootStore'
import { decrement, increment } from './rootUpdaters'

describe('rootUpdaters', () => {
  beforeEach(() => {
    store.update(initialState)
  })

  it('Should increment the count.', () => {
    const expectedState1 = {
      ...initialState,
      count: 1,
    }

    const expectedState2 = {
      ...initialState,
      count: 2,
    }

    increment()

    const actualState1 = store.current()

    increment()

    const actualState2 = store.current()

    expect(expectedState1).toEqual(actualState1)
    expect(expectedState2).toEqual(actualState2)
  })

  it('Should decrement the count.', () => {
    const expectedState1 = {
      ...initialState,
      count: -1,
    }

    const expectedState2 = {
      ...initialState,
      count: -2,
    }

    decrement()

    const actualState1 = store.current()

    decrement()

    const actualState2 = store.current()

    expect(expectedState1).toEqual(actualState1)
    expect(expectedState2).toEqual(actualState2)
  })
})
