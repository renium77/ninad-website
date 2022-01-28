import React from 'react'
import { Box, Heading, Stack, Flex, Link, Spacer } from '@chakra-ui/layout'
import { Button, Menu, IconButton, VStack } from '@chakra-ui/react'
import { AiOutlineMenu } from "react-icons/ai";
import { useDisclosure } from '@chakra-ui/hooks';
import { Drawer,DrawerContent, DrawerBody, DrawerOverlay, DrawerHeader } from '@chakra-ui/modal';
import {Link as ReactLink} from 'react-router-dom'

function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="white"
        color="black"
        opacity="30"
        pt='50px'
        >

      <Flex align="center" >
        <ReactLink to='/hero'>
          <Link>
            <Heading as="h1" size="xl" textDecoration='none' color='#ff3f58'>
                ninad dere
            </Heading>
            </Link>
        </ReactLink>
      </Flex>
      <Spacer/>

      
    <Menu display={{ base: "inline-flex", md: "none" }}>
        <Box>
        <Button
            as={IconButton}
            aria-label="Options"
            border='black'
            icon={<AiOutlineMenu />}
            bgColor="#none"
            variant="outline"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
        />
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay/>
                                    <DrawerContent>
                                      <DrawerBody>
                                        <DrawerHeader borderBottomWidth="1px"><ReactLink to='/projects'><Link color="black" fontSize="lg">projects</Link></ReactLink></DrawerHeader>
                                        <DrawerHeader borderBottomWidth="1px"><ReactLink to='/post'><Link  color="black" fontSize="lg">posts</Link></ReactLink></DrawerHeader>
                                        <DrawerHeader borderBottomWidth="1px"><ReactLink to='/brainboard' color="black" fontSize="lg">brainboard</ReactLink></DrawerHeader>
                                        <DrawerHeader borderBottomWidth="1px"><ReactLink to='/links' color="black" fontSize="lg">favourites</ReactLink></DrawerHeader>
                                      </DrawerBody>
                                    </DrawerContent>
        </Drawer>
        </Box>
        </Menu>
        <VStack>
      
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "inline-flex" }}
        width={{ base: "full", md: "auto" }}
        justifyContent="end"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        spacing={5}
        border='black'
      >
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}><ReactLink to='/projects'>projects</ReactLink></Button>
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}><ReactLink to='/post'>posts</ReactLink></Button>
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}><ReactLink to='/brainboard'>brainboard</ReactLink></Button>
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}><ReactLink to='/links'>favourites</ReactLink></Button>
      </Stack>
      </VStack>
      

      
    </Flex>
        </div>
    )
}

export default Navbar