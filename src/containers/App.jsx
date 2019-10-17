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
            avatar={data.avatar}
            name= {data.name}
            social={data.social}
            ></Navbar>
            <Info></Info>
            <Card>
                <Skills data={data.skills}></Skills>
            </Card>
            <Footer social={data.social}></Footer>
        </Main>
    )
}

export default App