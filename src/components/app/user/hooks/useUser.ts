import { axiosInstance, getJWTHeader } from '../../../../axiosInstance/index'
import { User } from '../../../../types/types'
import { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { queryKeys } from '../../../../reactQuery/constants'

interface useUserProps {
  user: User | null
  updateUser?: (user: User) => void
  clearUser?: () => void
}

async function getUser(user: User | null): Promise<User | null> {
  if (!user) return null

  const { data }: AxiosResponse<{ user: User }> = await axiosInstance.get(`user/${user.id}`, {
    headers: getJWTHeader(user),
  })

  return data.user
}

export function userUser(): useUserProps {
  const queryClient = useQueryClient()
  const { data: user } = useQuery(queryKeys.user, () => getUser(user))

  function updateUser(newUser: User): void {
    queryClient.setQueryData(queryKeys.user, newUser)
  }

  function clearUser() {
    queryClient.setQueryData(queryKeys.user, null)
  }
  return { user, updateUser, clearUser }
}
