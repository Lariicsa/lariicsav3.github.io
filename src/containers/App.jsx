import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Card from '../components/Card'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import useGetData from '../hooks/useGetData'


const App = () => {
    const data = useGetData()
    console.log(data);
    
    return data.length === 0 ? <strong>loading ..</strong> : (
        <Main>
            <Navbar
            avatar={data.image}
            ></Navbar>
            <Info></Info>
            <Card
            data={data.jobs}
            >
                <Skills></Skills>
            </Card>
            <Footer social={data.social}></Footer>
        </Main>
    )
}

export default App