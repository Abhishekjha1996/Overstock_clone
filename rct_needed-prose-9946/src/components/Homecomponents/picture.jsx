import React from 'react';

import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function First_picture() {
    return (
      <Flex
        w={'full%'}
        h={'85vh'}
        backgroundImage={
          'url(https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL-min.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'18xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              <img src="https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL-2.svg" alt="frst" 
              width={"500000px"}
              height={"5000px"}/>
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }