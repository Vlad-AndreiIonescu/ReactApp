

const HainaLista = ({haine, title, }) => {


    return (
        <div className="haina-lista">
            <h2>{title}</h2>

                {haine.map((haina)=>(
                <div className="haina-preview" key={haina.id}>
                    <h3>{haina.denumire}</h3> 
                    <p>Pretul este de {haina.pret}</p> 
                    </div>
            ))}
        </div>
    )
}

export default HainaLista



   
