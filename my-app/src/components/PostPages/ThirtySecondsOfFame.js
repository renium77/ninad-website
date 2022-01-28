import { 
    Box,
    Button,
    Container, 
    ListItem, 
    Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, 
    UnorderedList,
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
                    
                    <ModalBody fontSize={{base:'lg', md:'xl'}}>
                        To me, most concepts on the internet 🗺 seem to carry a hype behind them. It is essential for 
                        the razzmatazz of the concept to achieve some fame. But this fame brings in a time limit with 
                        itself, especially when people have time to dawdle (credits:corona-virus). With people not able 
                        to socialize publicly, the internet came in as a saviour, but what happens when they return back to 
                        being normal.India is yet to reach the point where the people are comfortable spending their whole 
                        day on the internet. Success of concepts like Clubhouse, NFT, Gamestop saga are just the bi-product 
                        of:
                        <UnorderedList>
                            <ListItem>Excess availability of time</ListItem>
                            <ListItem>It seems cool being a part of such concept</ListItem>
                        </UnorderedList>
                    </ModalBody>

                    </ModalContent>
                </Modal>
                </Container>
            
        </div>
    )
}

export default ThirtySecondsOfFame
