import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
} from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../auth/useAuth';

interface FormProps {
  email: string;
  password: string;
}

export const SignIn = (): ReactElement => {

  const [values, setValues] = useState<FormProps>({ email: '', password: '' });
  const [dirty, setDirty] = useState({ email: false, password: false });
  const auth = useAuth()


  return (
    <>
      <Flex minH="84vh" align="center" justify="center">
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Heading>Sign in to your account</Heading>
          </Stack>
          <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
            <Stack spacing={4}>
              <FormControl
                id="email"
                isRequired
                isInvalid={!values.email && dirty.email}
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({
                    ...values,
                    email: e.target.value
                  })}
                  onBlur={() =>
                    setDirty((prevDirty) => ({ ...prevDirty, email: true }))
                  }
                />
                <FormErrorMessage>Email may not be blank</FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isRequired
                isInvalid={!values.password && dirty.password}
              >
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={values.password}
                  onChange={(e) => setValues({
                    ...values,
                    password: e.target.value
                  })}
                  onBlur={() =>
                    setDirty((prevDirty) => ({ ...prevDirty, password: true }))
                  }
                />
                <FormErrorMessage>Password may not be blank</FormErrorMessage>
              </FormControl>
              <HStack spacing={2} width="100%">
                <Button
                  variant="outline"
                  type="submit"
                  isDisabled={!values.email || !values.password}
                  onClick={() => { null }}
                >
                  Sign up
                </Button>
                <Button
                  type="submit"
                  isDisabled={!values.email || !values.password}
                  onClick={() => auth.signin(values.email, values.password)}
                >
                  Sign in
                </Button>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}