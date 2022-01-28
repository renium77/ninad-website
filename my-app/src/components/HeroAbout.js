import React from 'react'
import { Container, Link, Text, Box } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'
import { Tooltip } from '@chakra-ui/react'

function HeroAbout() {
    return (
        <div>
            <Box p={{base:'3', md:'5'}}>
            <Container borderRadius='md' maxW='5xl' mt='50px' p={{base:'5', md:'50'}} shadow='lg' >
                <Text fontSize={{base:'2xl', md:'4xl'}} fontWeight='bold'>
                    hello! i’m <chakra.span fontWeight='bold' color='#ff3f58'>ninad 👋 .</chakra.span>
                </Text> 

                <Text fontSize={{base:'xl', md:'2xl'}} pt='20px'>
                    i am a <chakra.span fontWeight='bold'>front-end devloper</chakra.span> and a <chakra.span fontWeight='bold'>designer.</chakra.span>
                </Text> 

                <Text fontSize={{base:'xl', md:'2xl'}} pt='20px'>
                    previously i co-founded a services company <chakra.span fontWeight='bold' color='#ff3f58'><Link href='https://aegeontech.xyz'>Aegeon Tech.</Link></chakra.span> 
                </Text>

                <Text fontSize={{base:'xl', md:'2xl'}} pt='20px'>
                    currently based out of Aurangabad. i spend my free time lerning about "WEB3", tinkering about software design, doomscrolling
                    the internet and <Tooltip label='basically playing VALORANT'>clicking heads.</Tooltip>
                </Text>

                 <Text fontSize={{base:'xl', md:'2xl'}} pt='20px'>
                   one of my favourite fruits is lemon, you can have it with gravy stuff, drinks and if you are brave enough, with milk.
                </Text>

                <Text fontSize={{base:'xl', md:'2xl'}} pt='20px'>
                    i am <Link fontWeight='bold' color='#ff3f58'>ninadismyname</Link> on twitter and my e-mail 📧 is <Link fontWeight='bold' color='#ff3f58' href='mailto:dereninad@gmail.com'>dereninad@gmail.com.</Link>
                </Text>

            </Container>
            </Box>
        </div>
    )
}

export default HeroAbout