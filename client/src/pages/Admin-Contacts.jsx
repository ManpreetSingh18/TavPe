import { useEffect,useState } from "react"
import { useAuth } from "../store/auth"

import { toast } from'react-toastify';
import { baseUrl } from "../../Urls";

export const AdminContacts=()=>{

    const [contactData,setContactData]=useState([]);
    const {authorizationToken}=useAuth();

    const getContactsData=async()=>{

        try{
            const response=await fetch(`${baseUrl}/api/admin/contacts`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken
                }
            });
            const data=await response.json();
            console.log("contact data:",data);
            if(response.ok){
                setContactData(data);
                //console.log(response);
            }
        }catch(error){
            console.log(error);
        }
    }
    const deleteContactById=async (id)=>{
        console.log("CLock")
        try{
            const response =await fetch(`${baseUrl}/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken
                }
            })
            if(response.ok){
                getContactsData();
                toast.success("Deleted contacts successfully")
            }else{
                toast.error("Failed to delete contacts")

            }
            
        }catch(error){
            console.log("Error:",error);
            next(error);
        }
    }
    useEffect(()=>{
        getContactsData()
    },[])

    return <>
        {/* <h1>Hello</h1>
        {
            contactData.map((curContactData,index)=>{
                return <h1 key={index}>{curContactData.username}</h1>
            })
        } */}
        <section className="admin-contacts-section">
            <h1 >Admin Contact Data</h1>
            <div className="container admin-users">
                {
                    contactData.map((curContactData,index)=>{
                        const {username,email,message,_id}=curContactData;
                        
                        return (
                            <div key={index}>
                                <p>{username}</p>
                                <p>{email}</p>
                                <p>{message}</p>
                                <button className="btn" onClick={()=> deleteContactById(_id)}>Delete</button>
                            </div>
    
                        )
                    })
                }
            </div>
        </section>
    </>
}