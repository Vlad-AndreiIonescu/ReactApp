import { useState } from "react";

const Create = () => {

    const[denumire, setDenumire]=useState('');
    const[pret, setPret]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const haine={denumire,pret};

        fetch('http://localhost:8000/haine',{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify(haine)
        }).then(()=>{
            console.log('haina adaugata');
        })
    }

    return (
        <div className="create">
            <h2>Creare</h2>
            <form onSubmit={handleSubmit}>
                <label> Denumire:</label> 
                <input type="text" required value={denumire} onChange={(e)=>setDenumire(e.target.value)}/>
                <label> Pret:</label> 
                <input type="text" required value={pret} onChange={(e)=>setPret(e.target.value)}/>
                <button>Creare</button>
                
            </form>
        </div>
    )
}

export default Create
