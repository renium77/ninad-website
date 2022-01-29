import { 
    Box,
    Button,
    Container, 
    Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
    useDisclosure,
    Text, 
    Badge} from '@chakra-ui/react'
import React from 'react'

function ThirtySecondsOfFame() {

     const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
          
                <Container maxW='6xl' p={1}>
                <Box pt='5' bg='black' w={{base:'xs', md:'sm'}} p='5' borderRadius='xl' _hover={{cursor:'pointer'}}>
                <Button variant='link' onClick={onOpen} color='white' fontSize='2xl'>30 seconds of fame ?</Button>
                <Text color='white'>Feb 26, 2021</Text>
                <Badge variant='outline' colorScheme='gray'>
                    Speculation
                </Badge>
                </Box>
                <Modal isOpen={isOpen} onClose={onClose} size='full'>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader fontSize={{base:'xl', md:'2xl'}}>30 seconds of fame ?</ModalHeader>
                    <ModalCloseButton />
                    
                    ...

                    </ModalContent>
                </Modal>
                </Container>
            
        </div>
    )
}

export default ThirtySecondsOfFame
