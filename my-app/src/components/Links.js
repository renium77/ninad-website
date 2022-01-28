import React from 'react'
import { Box, Container, Link, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import Footer from './Footer'



function Links() {
    return (
        <div>
        <Container maxW='6xl' pt='50px'>
                <Box fontWeight='bold' fontSize='5xl' p={1}>
                    links
                </Box>
                <Table variant='striped' colorScheme='gray'>
                    <TableCaption>[list of my faourite aritcles, videos, etc from the internet]</TableCaption>
            <Thead>
                <Tr>
                <Th>articles</Th>
                </Tr>
            </Thead>
            <Tbody>
              <Tr>
                    <Td>
                        <Link href="https://coda.io/@ankit-kumar/read-list" target="_blank" rel="noreferrer noopener">Read List- Ankit Kumar, Abhay Jani, Palak Zatakia</Link>
                    </Td>
                </Tr>

                <Tr>
                    <Td>
                        <Link href="https://invertedpassion.com/" target="_blank" rel="noreferrer noopener">Inverted Passion- Paras Chopra</Link>
                    </Td>
                </Tr> 

                <Tr>
                    <Td>
                        <Link href="https://kitlaughlin.wordpress.com/tag/nassim-taleb/" target="_blank" rel="noreferrer noopener">kitlaughlin - Nassim Taleb</Link>
                    </Td>
                </Tr>   
                 
                <Tr>
                    <Td>
                        <Link href="https://dcgross.com/" target="_blank" rel="noreferrer noopener">dcgross- Daniel Gross</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://blog.samaltman.com/" target="_blank" rel="noreferrer noopener">Blog- Sam Altman</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="http://www.paulgraham.com/articles.html" target="_blank" rel="noreferrer noopener">Paul Graham</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://www.collaborativefund.com/blog/" target="_blank" rel="noreferrer noopener">Collaborative Fund- Morgan Housel</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://balajis.com/" target="_blank" rel="noreferrer noopener">Blog- Balaji Srinivasan</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="http://www.aaronsw.com/weblog/" target="_blank" rel="noreferrer noopener">Blog- Arron Swartz</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://perell.com/" target="_blank" rel="noreferrer noopener">David Perell</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://hchawlah.medium.com/" target="_blank" rel="noreferrer noopener">Blog- Haresh Chawla</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://nav.al/" target="_blank" rel="noreferrer noopener">Naval Ravikant</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://reply.io/cold-email-whitepaper" target="_blank" rel="noreferrer noopener">Cold Email whitepaper- Abhinav Aurora, Lee Gladish</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://lofi.cafe/" target="_blank" rel="noreferrer noopener">Lofi Cafe</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://www.kooslooijesteijn.net/blog/design-better-avoiding-cognitive-biases?ref=sidebar" target="_blank" rel="noreferrer noopener">Design better by avoiding your cognitive biases</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://productdisrupt.com/" target="_blank" rel="noreferrer noopener">Product Disrupt</Link>
                    </Td>
                </Tr>  

                <Tr>
                    <Td>
                        <Link href="https://anvaka.github.io/sayit/?query=Jokes" target="_blank" rel="noreferrer noopener">Sub-reddit finder</Link>
                    </Td>
                </Tr>  


            </Tbody>
            </Table>
        </Container>
        <Footer/>
        </div>
    )
}

export default Links
