import React from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './components/Projects';
import Post from './components/Post';
import Links from './components/Links';
import Nft from './components/Nft'
import Brainboard from './components/Brainboard';

function App() {


const theme = extendTheme({
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
})


  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/hero' element={<Hero/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/links' element={<Links/>}/>
          <Route path='/brainboard' element={<Brainboard/>}/>
          <Route path='/nft' element={<Nft/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
