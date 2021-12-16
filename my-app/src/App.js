import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from './components/Projects';

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
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
