import { useState, useEffect } from 'react'
const api = 'https://obscure-beyond-70070.herokuapp.com/api/info'
//https://us-central1-gndx-cv.cloudfunctions.net/me

const useGetData = () => {
    const [myData, setData] = useState([])

    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setData(data.info))
    }, [])
    return myData
}

export default useGetData