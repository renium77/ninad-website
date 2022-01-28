import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';

function Brainboard() {
  return (
      <div>
          <Container maxW='6xl' pt='50px'>
            <Box fontWeight='bold' fontSize='5xl' p={1}>
                        brainboard
            </Box>
            <Text p={1} mt='10' fontSize='lg'>[coming soon....]</Text>
          </Container>
          <Footer/>
      </div>
  )
}

export default Brainboard;
