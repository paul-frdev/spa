import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { GiFlowerPot } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { ImMenu } from 'react-icons/im';

import { Links } from './shared/constants';
import { NavLink } from '../common/NavLInk';
import { userUser } from './user/hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';



export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = userUser();
  const history = useNavigate();
  const auth = useAuth()


  return (
    <>
      <Box bg={useColorModeValue('gray.900', 'gray.700')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            alignItems="center"
            size="md"
            icon={
              isOpen ? (
                <GrClose
                  style={{ margin: '0 auto', width: '20px', height: '20px' }}
                />
              ) : (
                <ImMenu
                  style={{ margin: '0 auto', width: '20px', height: '20px' }}
                />
              )
            }
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <NavLink to="/">
              <Icon w={8} h={8} as={GiFlowerPot} />
            </NavLink>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} to={`/${link}`}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <HStack>
              {user ? (
                <>
                  <NavLink to={`/user/${user.id}`}>
                    <Avatar width={50} height={50}>
                      {user.email}
                    </Avatar>
                  </NavLink>
                  <Button onClick={() => auth.signout()}>Sign out</Button>
                </>
              ) : (
                <Button onClick={() => history('sign-in')}>Sign in</Button>
              )}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} to={`/${link}`}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
