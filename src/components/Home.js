import { useState,useEffect } from "react";
import HainaLista from "./HainaLista";


const Home = () => {

    const[haine, setHaine]=useState(null);
 
    const [error, setError]=useState(null);
  

    useEffect(() => {
        setTimeout(() => {
          fetch('http://localhost:8000/haine')
          .then(res => {
            if (!res.ok) { 
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
           
            setHaine(data);
            setError(null);
          })
          .catch(err => {
          
        
            setError(err.message);
          })
        }, 1000);
      }, [])


    return (
       
            <div className="home">
                      { error && <div>{ error }</div> }
               
                     {haine&&<HainaLista haine={haine}/>}
                    
            </div>
        
    );
}

export default Home



