import { Box, Button, chakra, Container, Divider, Link, SimpleGrid, Slider, SliderTrack, Text } from '@chakra-ui/react'
import React from 'react'
import {ImNewTab} from 'react-icons/im'

export default function ProjectCards() {
    return (
        <div>
           <SimpleGrid columns={[1, null, 3]} spacing='40px' pt='5'>
                <Box borderRadius='20' bg='#f3f6f4' height='300' _hover={{boxShadow:'md', cursor:'pointer'}}>
                    <Container maxW='6xl'>
                        <Text fontSize='2xl' fontWeight='bold' color='black' pt='6' pl='3'>crypto price tracker</Text>
                        <Divider borderColor='black' pt='5'/>    
                        <Text color='#444444' fontWeight='semibold' fontSize='md' pt='6' pl='3  '>
                            a simple webapp that displays the top 100 cryoptocurrencies. made using react and coin gecko api
                        </Text>
                        <Box pt={{base:'30px', md:'50px'}} >
                        <Link href='https://github.com/renium77/Crypto_Price_Tracker'><Button borderRadius='50' bg='#ff3f58' _hover={{bg:'#f3f6f4', border:'2px'}}><ImNewTab/></Button></Link>
                        </Box>
                    </Container>
                </Box>


                 <Box borderRadius='20' bg='black' height='250' _hover={{boxShadow:'md', cursor:'pointer'}}>
                    <Container maxW='6xl'>
                        <Text fontSize='2xl' fontWeight='bold' color='white' pt='6' pl='3'>chakra-ui component library</Text>
                        <Divider borderColor='white' pt='5'/>    
                        <Text color='#a9a9a9' fontWeight='semibold' fontSize='md' pt='6' pl='3  '>
                            a chakra-ui component library for devs.
                        </Text>
                        <Box pt={{base:'30px', md:'30px'}}>
                        <Button borderRadius='50' bg='#ff3f58' _hover={{bg:'#f3f6f4', border:'2px'}}><ImNewTab/></Button>
                        </Box>
                    </Container>
                </Box>   


                <Box borderRadius='20' bg='#f3f6f4' height={{base:'sm', md:'md' }} _hover={{boxShadow:'md', cursor:'pointer'}}>
                    <Container maxW='6xl'>
                        <Text fontSize='2xl' fontWeight='bold' color='black' pt='6' pl='3'>chakra-ui website template</Text>
                        <Divider borderColor='black' pt='5'/>    
                        <Text color='#444444' fontWeight='semibold' fontSize='md' pt='6' pl='3  '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <Box pt={{base:'5px', md:'50px'}} >
                        <Button borderRadius='50' bg='#ff3f58' _hover={{bg:'#f3f6f4', border:'2px'}}><ImNewTab/></Button>
                        </Box>
                    </Container>
                </Box>
            </SimpleGrid>
        </div>
    )
}
