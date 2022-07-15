import { Box, Heading, RadioGroup, HStack, Radio } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useTreatments } from '../../treatments/hooks/userTreatments';
import { useStaff } from './hooks/useStaff';
import { Staff } from './Staff';


export const AllStaff = (): ReactElement => {
  const { staff } = useStaff();
  const treatments = useTreatments();
  console.log('staff', staff);

  return (
    <Box>
      <Heading mt={10}>
        Our Staff
      </Heading>
      <HStack m={10} spacing={8} justify="center">
        {staff && staff.map(staffData => (
          <Staff key={staffData.id} staffData={staffData} />
        ))}
      </HStack>
      <RadioGroup>
        <HStack my={10} spacing={8} justify="center">
          <Heading size="md">Filter by treatment:</Heading>
          <Radio value="all">All</Radio>
          {treatments && treatments.map(treatment => (
            <Radio key={treatment.id} value={treatment.name}>
              {treatment.name}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </Box>
  )
}