import { Box, Container, Link, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


function Footer() {
    return (
        <div>

        
            <Box>
                <Container
                as={Stack}
                maxW={'6xl'}
                direction={{ base: 'column', md: 'row' }}
                spacing={5}
                justify={'space-between'}
                align={{base:'left', md:'center'}}
                pt='300px'
                pb='20px'
                    >
                        <Stack direction={'row'} spacing={6}>
                            <Link href='https://www.instagram.com/ninaddere/'><FaInstagram  color='black' size='40px' /></Link>
                            <Link href='https://twitter.com/ninadismyname'><FaTwitter color='black' size='40px' /></Link>
                            <Link><FaLinkedin color='black' size='40px' /></Link>
                            <Link href='https://github.com/renium77'><FaGithub color='black' size='40px' /></Link>
                        </Stack>
                    

                    <Link><Text fontWeight='semibold' fontSize='xl' color='#a9a9a9'>@ninadismyname</Text></Link>
                </Container>
            </Box>
        </div>
    )
}

export default Footer