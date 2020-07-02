import { createStore } from 's-is-for-store'

export interface CounterState {
  count: number,
}

export const initialState: CounterState = {
  count: 0,
}

const counterStore = createStore(initialState)

export default counterStore
