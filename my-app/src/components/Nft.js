import { Box, Container, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { Image } from '@chakra-ui/image'
import Footer from './Footer'

function TestimonialsCard() {
    return (
        <div>
            <Container maxW='6xl' pt='10'>
            <SimpleGrid columns={[1, null, 3]} spacing={{base:"10px", md:"20px"}}>
                <Box cursor="pointer" maxW="sm" borderWidth="1px" borderRadius="lg" bg='#faf1ed' shadow='xl'>
                    <Image src='https://i.redd.it/e087uws4s2k71.png' borderRadius='10' />
                    <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    align={'center'}
                    p='5'
                    >
                    contrast by Ninad
                    </Box>
                </Box>

                <Box cursor="pointer" maxW="sm" borderWidth="1px" bg='#faf1ed' borderRadius='lg' shadow='xl'>
                    <Image src='https://i.redd.it/e087uws4s2k71.png' borderRadius='10' />
                    <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    align={'center'}
                    p='5'
                    >
                    pseudo punks
                    </Box>
                </Box>
                
                <Box cursor="pointer" maxW="sm" borderWidth="1px" bg='#faf1ed' borderRadius='lg' shadow='xl'>
                    <Image src='https://preview.redd.it/0s8gxaytr5k71.png?width=640&crop=smart&auto=webp&s=cd16e2b8a80efdcb0fddc895de8651c421d43985' borderRadius='10' />
                    <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    align={'center'}
                    p='5'
                    >
                    baadal
                    </Box>
                </Box>
            </SimpleGrid>
            </Container>

            <Footer/>
        </div>
    )
}

export default TestimonialsCard
