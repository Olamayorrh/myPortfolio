import { createContext, useEffect, useState } from "react"
import Swal from "sweetalert2";

export const StateContext = createContext();

const DataContext = ({children})=>{
           // creating state to manipulate dark mode
            const [darkMode, setDarkMode] = useState(false);

            const toggleDarkMode = ()=>{
            setDarkMode(!darkMode)
        };


    // collecting and saving contact info from website using state

      const getStorageState = JSON.parse(localStorage.getItem("data") || "[]")

     
     
      const [userInfo,setUserInfo] = useState(getStorageState)

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [number, setNumber] = useState("")
      const [message, setMessage] = useState("")
  
    
      const handleForm = (e)=>{
        const success = ()=>{
            Swal.fire({
                title: "Success!",
                text:"Detail sent successfully",
                icon: 'success'
            });
        };

        const addDetail = {
            id: userInfo.length + 1,
            name: name,
            email: email,
            number: number,
            message: message,
           
        }

        if(name.length > 1 && email.length > 1 && email.length > 1 && number.length > 1 && message.length > 1){
            
            setUserInfo((prevData)=>{
                return  [...prevData, addDetail]
            })

            success();
        
        }else
        
        {
            
                alert("Kindly fill all spaces")
               
            
        }
    
      }
     
  
    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(userInfo))
 
    },[userInfo]);

  
    // End of user info 

    

   

  
   
   
    return(
        <StateContext.Provider value={{toggleDarkMode, darkMode, handleForm,setEmail,setName,setNumber,setMessage}}>
            {children}
        </StateContext.Provider>
    )
};

export default DataContext;