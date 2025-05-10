import '../styles/GrupoCardButton.css'

function GrupoCardButton({ GrupoCardButtonImg, GrupoCardButtonTitle, mostrarGrupo}){
    return(
        <div className="grupoCardButton" onClick={mostrarGrupo} >
            <div className="grupoCardButton-img-container">
                <img className="grupoCardButton-img" alt="icono de pildora que hace referencia a los medicamentos" src={GrupoCardButtonImg}/>
            </div>
            <h2 className="grupoCardButton-title">{GrupoCardButtonTitle}</h2>
        </div>
    )
}

export default GrupoCardButton;