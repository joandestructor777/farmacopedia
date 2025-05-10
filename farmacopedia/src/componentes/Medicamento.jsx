import '../styles/Medicamento.css'

function Medicamento({ nombreGenerico, nombreComercial, efectosSecundariosTexto, cuidados }) {
    return (
        <>
            <p className="medicamentoGenerico"><strong>Nombre genérico:</strong> <br/>{nombreGenerico}</p>
            <p className="medicamentoComercial"> <strong>Nombre comercial:</strong> <br/>{nombreComercial}</p>
            <h2 className="efectosSecundarios-title">Efectos secundarios comunes</h2>
            <p className="efectosSecundarios-text">{efectosSecundariosTexto}</p>
            <h2 className="cuidados-title">Cuidados de enfermería esenciales</h2>
            <ol className="cuidados-ol">
                {cuidados.map((cuidado, index) => (
                    <li key={index} className="cuidados-li">{cuidado}</li>
                ))}
            </ol>
        </>
    );
}
export default Medicamento;
