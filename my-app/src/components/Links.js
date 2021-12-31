import React from 'react'
import { Box, Container, Link, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

const links_table = [
    {
        name:'Ninad Dere Website',
        link:'https://ninad-dere.vercel.app'
    },
    {
        name:'Ninad Dere Website',
        link:'https://ninad-dere.vercel.app'
    },
    {
        name:'Ninad Dere Website',
        link:'https://ninad-dere.vercel.app'
    },
]

function Links() {
    return (
        <div>
        <Container maxW='6xl' pt='50px'>
                <Box fontWeight='bold' fontSize='5xl' p={1}>
                    links
                </Box>
                <Table variant='striped' colorScheme='gray'>
            <Thead>
                <Tr>
                <Th>links</Th>
                </Tr>
            </Thead>
            <Tbody>
                
                <Tr>
                    {links_table.map((link_table) =>(
                            <Td>
                                <Link key={link_table.name}
                                href={link_table.link}
                                >{link_table.name}</Link>
                             </Td>
                    ))}
                      
                </Tr>
               
    
                
                    
                
            </Tbody>
            </Table>
        </Container>
        </div>
    )
}

export default Links
