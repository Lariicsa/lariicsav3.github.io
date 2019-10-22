import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Card from '../components/Card'
import Footer from '../components/Footer'
import useGetData from '../hooks/useGetData'


const Experience = () => {
    const data = useGetData()
    console.log(data);
    return data.length === 0 ? <strong>loading ..</strong> : (
        <div className="space">
            <Main>
                <Navbar></Navbar>
                <Info>
                    <>
                        <div className="row">
                            <h2>Experience</h2>
                        </div>
                        <p className="cool">
                            I’m have UI Design background and strong skills implementing HTML & CSS in different environments.
                        </p>
                    </>
                </Info>
                <div className="row timeline animated">
                    <div className="line"></div>
                    <div className="cards animated">
                        <Card
                            data={data.jobs}
                        >
                        </Card>
                    </div>
                </div>
                <Footer social={data.social}></Footer>
            </Main>
        </div>
    )
}

export default Experience