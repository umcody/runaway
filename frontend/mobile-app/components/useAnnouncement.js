import {useEffect,useState} from 'react'
import axios from 'axios'
// custom hook
// get announcements
export default function useAn() {
    const [loadingAn,setLoadingAn] = useState(true)
    const [errorAn,setErrorAn] = useState(false)
    const [announcements,setAnnouncements] = useState([])
   useEffect(() =>{
       setLoadingAn(true)
       setErrorAn(false)
    let cancel
    //axios get announcements
    axios({
        method:'GET',
        url:"https://runaway-practicum.herokuapp.com/api/announcement/get",
        cancelToken: new axios.CancelToken(c=> cancel =c)
    }).then(res =>{ 
        setAnnouncements(res.data)
        setLoadingAn(false)
    })
    .catch(e=> {
        setErrorAn(true)
        if(axios.isCancel(e)) return
        console.log(e);
        res.sendStatus(500);
        
      });
    })
    return {loadingAn,errorAn, announcements}}
