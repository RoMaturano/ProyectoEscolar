import React, { useEffect, useState } from 'react';
import axios from "axios";

const Login=()=>{
   
  const [detail,setDetail]=useState()

  // useEffect(()=>{
  //   axios.get("http://localhost:3001/staff")
  //   .then ((data)=>{
  //       console.log(data.data);
  //       if(data.data){
  //           setDetail(data.data)
  //       }
        
  //   })
  //   },[])

  //   const filterEmailPassword=()=>{

  //     const email= detail[0].email
  //     const password = detail[0].passwordStaff


  //   }

 
return(
<div>
  

  <iframe  title="Login" src="http://127.0.0.1:5500/React/institutoDeanF/client/src/HTML/index.html" 
    style={{  
      
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    }}
    ></iframe>
    </div>
    )
}

export default Login