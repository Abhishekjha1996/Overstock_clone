import { Stack, Image, SimpleGrid, Text, Box } from "@chakra-ui/react";



const Logos = () => {
    return (

<SimpleGrid columns={3} spacing={15} width={"90%"} margin={"auto"}>
  <Image  boxSize='150px'
  width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-NinjaLogo.svg?imwidth=1920'  alt='Dan Abramov'
  />
  <Image boxSize='180px' width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-SharkLogo.svg?imwidth=1920'
  />
  <Image boxSize='180px' width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-KitchenAidLogo.svg?imwidth=1920' />
  

  <Image boxSize='180px' width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-DysonLogo.svg?imwidth=1920' />


  <Image boxSize='180px' width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-KeurigLogo.svg?imwidth=1920' />


  <Image boxSize='180px' width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-CuisinartLogo.svg?imwidth=1920' />

  <Image boxSize='180px' width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-CalphalonLogo.svg?imwidth=1920' />


  <Image boxSize='180px' width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-HamiltonBeachLogo.svg?imwidth=1920' />


  <Image boxSize='180px' width={"full"}
  height={'full'} src='https://ak1.ostkcdn.com/img/mxc/111522-CasperLogo.svg?imwidth=1920' />


</SimpleGrid>
    )
}

export default Logos