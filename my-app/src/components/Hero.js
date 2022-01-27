import { Container } from '@chakra-ui/layout'
import React from 'react'
import Footer from './Footer'
import HeroAbout from './HeroAbout'
import Post from './Post'

function Hero() {
    return (
        <div>
           <HeroAbout/>
           <Footer/>
        </div>
    )
}

export default Hero