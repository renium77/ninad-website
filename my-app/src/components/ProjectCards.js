import { Box, Button, Container, Divider, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import {ImNewTab} from 'react-icons/im'

export default function ProjectCards() {
    return (
        <div>
           <SimpleGrid columns={[1, null, 3]} spacing='40px' pt='5'>
                <Box borderRadius='20' bg='#f3f6f4' height='300' _hover={{boxShadow:'md', cursor:'pointer'}}>
                    <Container maxW='6xl'>
                        <Text fontSize='2xl' fontWeight='bold' color='#ff3f58' pt='6' pl='3'>crypto price tracker</Text>
                        <Divider borderColor='black' pt='5'/>    
                        <Text color='#444444' fontWeight='semibold' fontSize='md' pt='6' pl='3  '>
                            a simple webapp that displays the top 100 cryoptocurrencies. made using react and coin gecko api
                        </Text>
                        <Box pt={{base:'30px', md:'50px'}} >
                        <Link href='https://github.com/renium77/Crypto_Price_Tracker' target='_blank' rel='noreferrer noopener'><Button borderRadius='50' bg='#ff3f58' _hover={{bg:'#f3f6f4', border:'2px'}}><ImNewTab/></Button></Link>
                        </Box>
                    </Container>
                </Box>


                 <Box borderRadius='20' bg='black' height='250' _hover={{boxShadow:'xl', cursor:'pointer'}}>
                    <Container maxW='6xl'>
                        <Text fontSize='2xl' fontWeight='bold' color='#ff3f58' pt='6' pl='3'>chakra-ui component library</Text>
                        <Divider borderColor='white' pt='5'/>    
                        <Text color='#a9a9a9' fontWeight='semibold' fontSize='md' pt='6' pl='3  '>
                            a chakra-ui component library for devs.
                        </Text>
                        <Box pt={{base:'30px', md:'30px'}}>
                        <Link href='https://github.com/renium77/ChakraComponents' target='_blank' rel='noreferrer noopener'><Button borderRadius='50' bg='#ff3f58' _hover={{bg:'#f3f6f4', border:'2px'}}><ImNewTab/></Button></Link>
                        </Box>
                    </Container>
                </Box>   

            </SimpleGrid>
        </div>
    )
}
