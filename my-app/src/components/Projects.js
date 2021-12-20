import { Text } from '@chakra-ui/layout'
import {Container, Box } from '@chakra-ui/react'
import React from 'react'
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
        </div>
    )
}

export default Projects