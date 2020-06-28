import { createStore } from 's-is-for-store'

export interface RootState {
  count: number,
}

export const initialState: RootState = {
  count: 0,
}

const rootStore = createStore(initialState)

export default rootStore
