import { Box, Heading, Center } from '@chakra-ui/react'
import { ReactElement } from 'react';
import { Link } from 'react-router-dom'
import { userUser } from './hooks/useUser'

export const UserAppointments = (): ReactElement | null => {
  const { user } = userUser();

  if (!user) {
    return;
  }

  return (
    <Box>
      <Heading mt={10} style={{textAlign: 'center'}}>
        Your Appointments
      </Heading>
      <Center>
        {user ? (
          null
        ) : (
          <Link to="/Calendar">Book an appointment</Link>
        )}
      </Center>
    </Box>
  )
}