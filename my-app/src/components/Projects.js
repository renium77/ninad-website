import {Container, Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import ProjectCards from './ProjectCards'

function Projects() {
    return (
        <div>
            <Container maxW='6xl' pt='50px'>

                <Box fontWeight='bold' fontSize='5xl' p={1}>
                    projects
                </Box>
                <ProjectCards/>
                
            </Container>
            <Footer/>
        </div>
    )
}

export default Projects