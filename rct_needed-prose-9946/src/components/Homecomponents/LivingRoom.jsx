
import React from 'react';

import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function LivingRoom() {
    return (
      <Flex
        w={'full%'}
        h={'85vh'}
        backgroundImage={
          'url(https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame4.jpg?imwidth=1920)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'transparent'}>
          <Stack maxW={'18xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              <img src="https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.svg?imwidth=1920" alt="frst" 
              width={"500000px"}
              height={"5000px"}/>
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }