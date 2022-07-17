import { Box, Heading, HStack } from '@chakra-ui/react';
import { useTreatments } from './hooks/userTreatments'
import { Treatment } from './Treatment';

import styles from './treatment.module.css';

export const Treatments = () => {

  const treatments = useTreatments();


  return (
    <Box>
      <Heading mt={10}>
        Available Treatments
      </Heading>
      <HStack
        className={styles.treatments}
        m={{ base: 3, md: 7 }}
        spacing={8}
        justify={{ base: 'center', md: 'flex-start', }}
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        flexDirection={{ base: 'row' }}
      >
        {treatments && treatments.map(treatment => (
          <Treatment key={treatment.id} treatmentData={treatment} />
        ))
        }
      </HStack>
    </Box>
  )
}