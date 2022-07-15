import { Text } from '@chakra-ui/react';
import { IStaff as StaffType } from '../../../types/types';
import { Card } from '../../common/Card';


interface StaffProps {
    staffData: StaffType;
}
export const Staff = ({ staffData }: StaffProps) => {
    const cardContents = <Text>{staffData.treatmentNames.join(', ')}</Text>

    return (
        <Card
            itemName={staffData.name}
            image={staffData.image}
            cardContents={cardContents}
        />
    )
}