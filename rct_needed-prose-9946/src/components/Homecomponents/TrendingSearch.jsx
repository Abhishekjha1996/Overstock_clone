
import React from "react";

import { SimpleGrid, Box } from "@chakra-ui/react";

const TrendingSearch = () => {
    return (
    <Box height={"500px"} border={"1px solid red"}>
    <Box as="b" fontSize='4xl'> Trending Searches </Box>
    <SimpleGrid columns={3} spacingX='40px' spacingY='10px'>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' textAlign={ "center" } > Mugs </Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' >Blankets</Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' >Cookie Cutters</Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' >Air Fryers</Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' > Kitchen Mixers </Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' > Lamps </Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' > Towels </Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' > Tree Skirts </Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' > Garland </Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' > fall wreaths </Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' > Christmas Trees </Box>
    <Box bg='#F5F6F7' height='60px' as="b" fontSize='1xl' > Fireplaces </Box>
    </SimpleGrid>


    </Box>
)

}

export default TrendingSearch;



