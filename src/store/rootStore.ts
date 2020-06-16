import { createStore } from 's-is-for-store'

interface RootStore {
  count: number,
}

const initialState: RootStore = {
  count: 0,
}

const rootStore = createStore(initialState)

export default rootStore
