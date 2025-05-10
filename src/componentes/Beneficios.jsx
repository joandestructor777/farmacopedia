import '../styles/beneficios.css';

function Beneficio({ altBeneficio, tituloBeneficio, TextoBeneficio, imagen}){
    return (
        <div className="benefit">
            <h2 className="benefit-title">{tituloBeneficio}</h2>
            <div className="benefit-img-container">
                <img className="benefit-img" src={`../public/beneficios-img/logo-de-${imagen}.png`} alt={altBeneficio} />
            </div>
            <p className="benefit-text">{TextoBeneficio}</p>
        </div>
    )
}

export default Beneficio;