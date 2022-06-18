import axios from "axios"
import { useEffect, useState } from "react"

export const useGetData = (url, deps) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getData = async() => {
            try {
                await axios.get(url).then(response => {
                    setData(response.data)
                })
            }
            catch(err) {
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }
        getData()
    },[deps])
    return {
        data,
        setData, loading, setLoading
    }
}