import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCustomToast } from './hooks/useCustomToast';
import { userUser } from './user/hooks/useUser';


interface ProtectedRoutesProps {
  children?: ReactNode;
}
export const ProtectedRoutes = ({ children }: ProtectedRoutesProps): JSX.Element => {
  const { user } = userUser();
  const toast = useCustomToast();
  const navigate = useNavigate();
  
  
  if (!user) {
    const redirectPath = '/sign-in';
    const title = 'You are not authorized, please enter your login and password and try again'
    toast({ title, status: 'warning' });
    navigate(redirectPath, { replace: true });
  }

  return (
    <>
      {children}
    </>
  )
}