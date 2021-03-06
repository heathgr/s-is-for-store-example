import { shallow, mount } from 'enzyme'
import React from 'react'
import { createTestUpdater } from '@s-is-for-store/react/lib/test-utils'

import Counter from './Counter'
import * as rootUpdaters from '../updaters/counterUpdaters'
import store, { initialState } from '../store/counterStore'

describe('Counter', () => {
  const update = createTestUpdater(store)

  beforeEach(() => {
    store.unsubscribeAll()
    store.update(initialState)
  })

  it('Should render', () => {
    const subject = shallow(<Counter />)

    expect(subject.exists()).toBe(true)
  })

  it('Should display the current count.', () => {
    const subject = mount(<Counter />)

    const testCount1 = 47374783
    const expected1 = testCount1.toString()
    const testCount2 = 3242353423
    const expected2 = testCount2.toString()

    update({
      count: testCount1,
    })

    const actual1 = subject.find('[data-test-id="counter"]').text()

    update({
      count: testCount2,
    })

    const actual2 = subject.find('[data-test-id="counter"]').text()

    expect(actual1).toBe(expected1)
    expect(actual2).toBe(expected2)
  })

  it('Should have an increment button.', () => {
    const incrementSpy = jest.spyOn(rootUpdaters, 'increment')
    const subject = mount(<Counter />)

    const incrementButton = subject.find('button[data-test-id="increment-button"]')

    incrementButton.simulate('click')

    expect(incrementSpy).toBeCalledTimes(1)

    incrementButton.simulate('click')

    expect(incrementSpy).toBeCalledTimes(2)

    expect(true).toBe(true)
  })

  it('Should have a decrement button.', () => {
    const decrementSpy = jest.spyOn(rootUpdaters, 'decrement')
    const subject = mount(<Counter />)

    const decrementButton = subject.find('button[data-test-id="decrement-button"]')

    decrementButton.simulate('click')

    expect(decrementSpy).toHaveBeenCalledTimes(1)

    decrementButton.simulate('click')

    expect(decrementSpy).toHaveBeenCalledTimes(2)
  })
})
