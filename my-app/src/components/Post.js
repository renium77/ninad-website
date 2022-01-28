import { Box, Container} from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import ThirtySecondsOfSummer from './PostPages/ThirtySecondsOfFame'

function Post() {
    return (
        <div>
            <Container maxW='6xl' pt='50px'>

                <Box fontWeight='bold' fontSize='5xl' p={1}>
                    posts
                </Box>

                <ThirtySecondsOfSummer/>
                
            </Container>
            <Footer/>
        </div>
    )
}

export default Post
