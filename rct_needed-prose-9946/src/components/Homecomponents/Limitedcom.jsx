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
     <Image src={img} width={"full"} height={"50px"} align={'center'} justify={'center'} border={"1px solid red"} backgroundImage={""}/>
     <Image src={mage}  width={"full"} height={"120px"}  align={'center'}  justify={'center'} border={"1px solid red"}  />
      <Text color={'gray.600'} textAlign={"center"}>{text}</Text>
    </Stack>
  );
};

export default function LimitedCom() {
  return (
    <Box p={6}>
     <p width={"100px"} height={"100px"} fontSize={"5xl"} >{"Limited-Time Deals"}</p>
      
      <SimpleGrid columns={{ base: 1, md: 6 }} spacing={8}>
        <Feature
          img ={'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_1.svg?imwidth=1920'}
          mage ={'https://images.pexels.com/photos/14300096/pexels-photo-14300096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          text={
            'select rugs'
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