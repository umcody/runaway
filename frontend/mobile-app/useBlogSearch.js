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
        /*NOTE USE YOUR OWN IP AND PORT*/
        url:"http://192.168.1.251:7000/api/volunteer/blog/get/" + pageNumber,
        params:{p:pageNumber},
        cancelToken: new axios.CancelToken(c=> cancel =c)
    }).then(res =>{ 
        setBlogs([...blogs,...res.data])
        setHasMore(res.data.length ==20)
        setLoading(false)
    })
    .catch(e=> {
        setError(true)
        if(axios.isCancel(e)) return
        console.log(e);
        res.sendStatus(500);
        
      });
    },[pageNumber])
    return {loading,error, hasMore,blogs}}
