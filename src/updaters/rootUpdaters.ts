import store from '../store/rootStore'

export const increment = (): void => {
  const { count } = store.current()

  store.update({
    count: count + 1,
  })
}

export const decrement = (): void => {
  const { count } = store.current()

  store.update({
    count: count - 1,
  })
}
