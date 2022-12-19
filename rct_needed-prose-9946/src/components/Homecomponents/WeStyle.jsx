import { Flex, Box, Image, Text, HStack, Spacer, Button } from "@chakra-ui/react"
import React from "react"

const WeStyle = () => {
    
    return (


        <Box width={"98%"} height={"650px"} margin={"auto"} >
    
        <Box height={"80px"}> <Text as='b' fontSize='3xl'> We've Got Your Style </Text> </Box>
        
        <Flex >
        <HStack spacing='15px' alignContent={"center"} justifyContent={"center"}>
                <Box width={"32%"} height={"470px"} >
                    <Image src={"https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920"} />
                    <Text height={"1px"} as='b'>Mid-Centuries Modern</Text>
                    <Text height={"18px"} >select rugs by</Text>
                    <Text height={"15px"} >artistic Weavers*</Text>

                </Box>

                <Box width={"32%"} height={"470px"} > 
                <Image src={"https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920"} />
                    <Text height={"1px"} as='b'>extra 20% off</Text>
                    <Text height={"18px"} >select rugs by</Text>
                    <Text height={"15px"} >artistic Weavers*</Text>
                </Box> 

                 <Box width={"32%"} height={"470px"} > 
                <Image src={"https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920"} />
                    <Text height={"1px"} as='b' >extra 20% off</Text>
                    <Text height={"18px"} >select rugs by</Text>
                    <Text height={"15px"} >artistic Weavers*</Text>
                     </Box>


                </HStack>
        </Flex>
        <Box height={5}></Box>
       
        <Box as='button' bg='black' color='white' px={6} h={10} > See All Styles </Box>
        

        </Box>


    )

}

export default WeStyle;