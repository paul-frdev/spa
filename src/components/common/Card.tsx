import { Box, Center, Image, Text, Link, Stack, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { baseImageUrl } from '../../axiosInstance/config';
import { Image as ImageType } from '../../types/types';


interface CardProps {
  itemName: string;
  image: ImageType,
  cardContents: ReactNode
}

export const Card = ({ itemName, image, cardContents }: CardProps): JSX.Element => {

  return (
    <Center py={12}>
      <Box
        p={6}
        maxW="330px"
        w="full"
        bg="white"
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box rounded="lg" mt={-12} pos="relative" height="230px">
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src={`${baseImageUrl}/${image.fileName}`}
            alt={itemName}
          />
          <Text fontSize="xs" align="center">
            Photo by <Link href={image.authorLink}>{image.authorName}</Link>{' '}
            from <Link href={image.platformLink}>{image.platformName}</Link>
          </Text>
        </Box>
        <Stack pt={10}>
          <Heading fontSize="2xl">
            {itemName}
          </Heading>
          {cardContents}
        </Stack>
      </Box>
    </Center>
  )
}