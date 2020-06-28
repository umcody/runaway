import {useEffect,useState} from 'react'
import axios from 'axios'

export default function useBlogSearch(pageNumber) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [hasMore,setHasMore] = useState(false)
       const [blogs,setBlogs] = useState([])
   useEffect(() =>{
       setLoading(true)
       setError(false)
    let cancel
    axios({
        method:'GET',
        url:"http://192.168.1.251:7000/api/volunteer/blog/get/" + pageNumber
}).then(res =>{
        setHasMore(res.data.length >0)
        setLoading(false)
        setBlogs(res.data)
    })
    .catch(e=> {
        console.log(e);
        res.sendStatus(500);
        setError(true)
      });
  },[])
    return {loading,error, hasMore,blogs}}
