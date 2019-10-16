import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Card from '../components/Card'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

const App = () => {
    return (
        <Main>
            <Navbar></Navbar>
            <Info></Info>
            <Card>
                <Skills></Skills>
            </Card>
            <Footer></Footer>
        </Main>
    )
}

export default App