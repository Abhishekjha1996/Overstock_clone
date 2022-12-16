
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function SavingCombo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
     
        <Box width={"100%"} height={"450"} justifyContent={"center"} alignContent={"center"} > 
         <Flex  width={"100%"} height={"380"} justifyContent={'space-between'} justify={"center"} backgroundImage={"https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.svg?imwidth=1920"}  backgroundSize={'cover'}
      backgroundPosition={'center center'} >
        <Box width={"30%"} height={"400"} >  <Image src={"https://edge.curalate.com/v1/img/UAHTwj63C8RGkvE6a-IuUxfVOM9hoeP0t1xRS4UaQTw=/w/150"} width={"100%"} />  </Box>

        <Box width={"30%"} height={"400"}  > <Image src='https://edge.curalate.com/v1/img/_90M6t2nrNOzyY5wbyjJ4P87NsfdjqxC9AYq4nHzhQY=/w/150' width={"100%"} />  </Box>
         </Flex>
         
        </Box>
    </>
  );
}
