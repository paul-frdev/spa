
import {
  Box,
  Checkbox,
  Grid,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { UserAppointments } from '../user/UserAppointments';

export const Calendar = (): ReactElement => {
  const currentDay = dayjs();

  return (
    <Box>
      <HStack mt={10} spacing={8} justify="center">
        <IconButton
          aria-label="previous month"
          icon={<TiArrowLeftThick />}
        />
        <Heading minW="40%" textAlign="center">
        </Heading>
        <IconButton
          aria-label="next month"
          icon={<TiArrowRightThick />}
        />
        <Checkbox
          variant="flushed"
          width="48"
          position="absolute"
          right="10px"
        >
          Only show available
        </Checkbox>
      </HStack>
      <Grid templateColumns="repeat(7, 1fr)" gap={4} my={5} mx={10}>
        {/* first day needs a grid column */}
        {/* the rest of the days will follow */}
      </Grid>
      <UserAppointments/>
    </Box>
  )
}