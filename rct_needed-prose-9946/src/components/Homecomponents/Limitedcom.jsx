import React from 'react';

import { ReactElement } from 'react';
import { Box, SimpleGrid, Image, Text, Stack, Flex } from '@chakra-ui/react';

interface FeatureProps {
  Image: string;
  text: string;
  Image: string
}

const Feature = ({ img, text, mage}) => {
  return (
    <Stack>
     <Image src={img} 
     w={120} h={100}  align={'center'}  justify={'center'}/>
     <Image src={mage}  width={"150px"} height={"120px"} paddingTop={"-100px"} align={'center'}  justify={'center'} />
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function LimitedCom() {
  return (
    <Box p={6}>
      <SimpleGrid columns={{ base: 1, md: 6 }} spacing={8}>
        <Feature
          img ={'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_1.svg?imwidth=1920'}
          mage ={'https://images.pexels.com/photos/14300096/pexels-photo-14300096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          text={
            'Lorem ipsum dolor.'
          }
        />
        <Feature
          img ={'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920'}
          mage ={'https://images.pexels.com/photos/14300096/pexels-photo-14300096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          text={
            'Lorem ut labore...'
          }
        />
        <Feature
          img ={'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920'}
          mage ={'https://images.pexels.com/photos/14300096/pexels-photo-14300096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          text={
            'Lorem ipsum '
          }
        />
        <Feature
          img ={'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920'}
          mage ={'https://images.pexels.com/photos/14300096/pexels-photo-14300096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          text={
            'Lorem ipsum dolo..'
          }
        />
        <Feature
          img ={'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920'}
          mage ={'https://images.pexels.com/photos/14300096/pexels-photo-14300096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          text={
            'select bedroom furniture'
          }
        />
        <Feature
          img ={'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920'}
          mage ={'https://images.pexels.com/photos/14300096/pexels-photo-14300096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          text={
            'select bedroom furniture'
          }
        />
      </SimpleGrid>
    </Box>
  );
}