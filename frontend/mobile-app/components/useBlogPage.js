import {useEffect,useState} from 'react'
import axios from 'axios'

//gets blog data by page
export default function useBlogPage(pageNumber) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [hasMore,setHasMore] = useState(false)
    const [blogs,setBlogs] = useState([])
    //loading is default true 
   useEffect(() =>{
       setLoading(true)
       setError(false)
    let cancel
    //axios get request using page endpoint url, query is pageNumber
    axios({
        method:'GET',
        url:"https://runaway-practicum.herokuapp.com/api/volunteer/blog/get/" + pageNumber,
        params:{p:pageNumber},
        cancelToken: new axios.CancelToken(c=> cancel =c)
    }).then(res =>{ 
        // ... to add previous blogs as well as the new ones
        setBlogs([...blogs,...res.data.blogs])
        // if the data is 20 blogs then there is likely more blogs
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
