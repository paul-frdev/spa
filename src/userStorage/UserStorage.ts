import { User } from '../types/types'

const USER_LOCALSTORAGE_KEY = 'lazyday_user'

export const setStoreUser = (user: User): void => {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user))
}

export const getStoreUser = (): User | null => {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY)
  return storedUser ? JSON.parse(storedUser) : null
}

export const clearStoredUser = (): void => {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY)
}
