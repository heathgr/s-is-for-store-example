import React, { FC } from 'react'
import { useStore } from '@s-is-for-store/react'
import store from '../store/rootStore'
import { decrement, increment } from '../updaters/rootUpdaters'

const App: FC = () => {
  const state = useStore(store)
  const { count } = state

  return (
    <div>
      <div data-test-id="counter">
        { count }
      </div>
      <button
        data-test-id="decrement-button"
        type="button"
        onClick={() => decrement()}
      >
        -
      </button>
      <button
        data-test-id="increment-button"
        type="button"
        onClick={() => increment()}
      >
        +
      </button>
    </div>
  )
}

export default App
