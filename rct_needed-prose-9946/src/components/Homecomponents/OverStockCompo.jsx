import { Flex, Box, Image, Text, HStack, Spacer } from "@chakra-ui/react"
import React from "react"

const OverStockCompo = () => {
    
    return (


        <Box width={"98%"} height={"500px"} margin={"auto"} >
    
        <Box height={"80px"}> <Text as='b' fontSize='3xl'>Overstock Featured Brands</Text> </Box>
        
        <Flex >
        <HStack spacing='24px'>
                <Box width={"25%"} height={"400px"} bg={"white"}>
                    <Image src={"https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_33581952.jpg?imwidth=1920"} />
                    <Text height={"1px"} as='b'>extra 20% off</Text>
                    <Text height={"18px"} >select rugs by</Text>
                    <Text height={"15px"} >artistic Weavers*</Text>



                </Box>

                <Box width={"25%"} height={"400px"} > 
                <Image src={"https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_16543020.jpg?imwidth=1920"} />
                    <Text height={"1px"} as='b'>extra 20% off</Text>
                    <Text height={"18px"} >select rugs by</Text>
                    <Text height={"15px"} >artistic Weavers*</Text>
                </Box>

                <Box width={"25%"} height={"400px"}> 
                <Image src={"https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_30923284.jpg?imwidth=1920"} />
                    <Text height={"1px"} as='b' >extra 20% off</Text>
                    <Text height={"18px"} >select rugs by</Text>
                    <Text height={"15px"} >artistic Weavers*</Text> </Box>

                <Box width={"25%"} height={"400px"}> 
                 <Image src={"https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_33639553.jpg?imwidth=1920"} />
                    <Text height={"1px"} as='b' >extra 20% off</Text>
                    <Text height={"18px"} >select rugs by</Text>
                    <Text height={"15px"} >artistic Weavers*</Text> </Box>

                    </HStack>
        </Flex>

        </Box>


    )

}

export default OverStockCompo;