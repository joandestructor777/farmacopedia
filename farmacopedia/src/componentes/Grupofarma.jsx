import '../styles/grupofarma.css';
import Medicamento from "./Medicamento";

function Grupofarma({ Grupofarmacologico, GrupoTexto, GrupoAccion, medicamentos }) {
    return (
        <div className="grupofarma-container">
            <h2 className="grupo-titulo">{Grupofarmacologico}</h2>

            <div className="grupo-grid">
                <div className="grupo-card">
                    <h3 className="grupo-subtitulo">Definición</h3>
                    <p className="grupo-texto">{GrupoTexto}</p>
                </div>

                <div className="grupo-card">
                    <h3 className="grupo-subtitulo">Acción Farmacológica</h3>
                    <p className="grupo-texto">{GrupoAccion}</p>
                </div>
            </div>

            <div className="ejemplos-container">
                {medicamentos.map((med, index) => (
                    <div className="ejemplo-card" key={index}>
                        <h3 className="ejemplos-title">Ejemplo: {med.nombreGenerico}</h3>
                        <Medicamento {...med} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grupofarma;

