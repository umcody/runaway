import React,{useEffect,useState} from "react";
import "./AccountBar.css";
export default function(){
    const[user,setUser] = useState({});
    useEffect(()=>{
        let temp = localStorage.getItem("USER");
        if(temp){
            setUser(temp);
        }
    },[])
    return(
        <div className = "accountBar">
            <div className = "accountContainer">
                {`Welcome Back, ${user.email}`}
                <img className = "avatar" src = "/asset/avatar.svg"/>
            </div>
        </div>
    )
}