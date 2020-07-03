import {useEffect,useState} from 'react'
import axios from 'axios'

export default function useBlogUrl(url) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [blog,setBlog] = useState([])
   useEffect(() =>{
       setLoading(true)
       setError(false)
    let cancel
    axios({
        method:'GET',
        url:"https://runaway-practicum.herokuapp.com/api/volunteer/blog/get/url/" + encodeURIComponent(url),
        params:{url:url},
        cancelToken: new axios.CancelToken(c=> cancel =c)
    }).then(res =>{ 
        setBlog(res.data.blog)
        setLoading(false)
    })
    .catch(e=> {
        setError(true)
        if(axios.isCancel(e)) return
        console.log(e);
        res.sendStatus(500);
        
      });
    },[url])
    return {loading,error, blog}}
