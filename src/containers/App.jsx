import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Card from '../components/Card'
import Footer from '../components/Footer'
import useGetData from '../hooks/useGetData'
import Post from '../components/Post'


const App = () => {
    const data = useGetData()
    console.log(data);
    return data.length === 0 ? <strong>loading ..</strong> : (
        <div className="space">
            <Main>
                <Navbar
                    avatar={data.image}
                ></Navbar>
                <Info>
                    <>
                        <h1>Hi, I'm Larissa Avila</h1>
                        <p className="cool">
                            I’m <span>UI Designer and developer</span>. Master in <span>HTML/CSS</span> layingout.<br />
                            I enjoy designing and coding user interfaces.
                        </p>
                        <div className="row">
                            <h2>Latests personal projects</h2>
                        </div>
                    </>
                </Info>
                <Post
                title={ 'Monitor EF' }
                bg={'https://i.stack.imgur.com/v65fW.png'}
                description={
                    `This webapp is made to following healthy in children at Physical trainning in elementary school, 
                    from specific data (like weight, height, years, etc) give it by the professor the app get each parameter and analize it.`
                }
                 />

                 <Post
                title={ 'Monitor EF' }
                bg={'https://i.stack.imgur.com/v65fW.png'}
                description={
                    `This webapp is made to following healthy in children at Physical trainning in elementary school, 
                    from specific data (like weight, height, years, etc) give it by the professor the app get each parameter and analize it.`
                }
                 />
                <Footer social={data.social}></Footer>
            </Main>
        </div>
    )
}

export default App