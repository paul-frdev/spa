import { AxiosResponse } from 'axios'
import { axiosInstance } from '../axiosInstance'
import { useCustomToast } from '../components/app/hooks/useCustomToast'
import { userUser } from '../components/user/hooks/useUser'
import { User } from '../types/types'

interface useAuthProps {
  signin: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  signout: () => void
}

type UserResponse = { user: User }
type ErrorResponse = { message: string }
type AuthResponseType = UserResponse | ErrorResponse

export const useAuth = (): useAuthProps => {
  const SERVER_ERROR = 'There was an error contacting the server.'
  const toast = useCustomToast()
  const { updateUser, clearUser } = userUser()

  const authServerCall = async (endUrl: string, email: string, password: string): Promise<void> => {
    try {
      const { data, status }: AxiosResponse<AuthResponseType> = await axiosInstance({
        url: endUrl,
        method: 'POST',
        data: { email, password },
        headers: { 'Content-Type': 'application/json' },
      })

      if (status === 400) {
        const title = 'message' in data ? data.message : 'Unauthorized'
        toast({ title, status: 'warning' })
        return;
      }

      if ('user' in data && 'token' in data.user) {
        toast({ title: `Logged in as ${data.user.email}`, status: 'info' })
        updateUser?.(data.user)
      }
    } catch (errorResponse) {
      console.log(errorResponse)
      toast({
        title: SERVER_ERROR,
        status: 'error',
      })
    }
  }

  const signin = async (email: string, password: string): Promise<void> => {
    authServerCall('signin', email, password)
  }
  const signup = async (email: string, password: string): Promise<void> => {
    authServerCall('user', email, password)
  }
  const signout = () => {
    clearUser?.(), toast({ title: 'logged out', status: 'info' })
  }

  return {
    signin,
    signup,
    signout,
  }
}
