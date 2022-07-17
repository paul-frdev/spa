import { TreatmentsProps as TreatmentsType } from '../../../types/types';
import { Box, Text } from '@chakra-ui/react';
import { Card } from '../../common/Card';
import styles from  './treatment.module.css';
interface TreatmentProps {
  treatmentData: TreatmentsType
}

export const Treatment = ({ treatmentData }: TreatmentProps): JSX.Element => {
  const cardContents = <Text>{treatmentData.description}</Text>;
  
  return (
    <Box className={styles.treatment} marginStart={{base: 0, md: 8}}>
      <Card
        itemName={treatmentData.name}
        image={treatmentData.image}
        cardContents={cardContents}
      />
    </Box>
  )
}