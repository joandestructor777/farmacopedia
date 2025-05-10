import Grupofarma from "../componentes/Grupofarma";
import gruposFarmacologicos from "../dataGruposFarmacologicos";
import medicamentosAnalg from '../dataMedicamento.js';

export function LogicaGrupoFarma(numKey, cerrarGrupo) {
  switch (numKey) {
    case 0:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.noOpioides);
    case 1:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.opioides);
    case 2:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antiinflamatorios);
    case 3:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antibioticos);
    case 4:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antidiabeticos);
    case 5:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antihipertensivos);
    case 6:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antipireticos);
    case 7:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antidepresivos);
    case 8:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.ansioliticos);
    case 9:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.anticonvulsionantes);
    case 10:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antihistaminicos);
    case 11:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.anticoagulantes);
    case 12:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.broncodilatadores);
    case 13:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.diureticos);
    case 14:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antiacidos);
    case 15:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antipsicoticos);
    case 16:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antivirales);
    case 17:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antifungicos);
    case 18:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antiemeticos);
    case 19:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.relajantesMusculares);
    case 20:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.hipnoticos);
    case 21:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.inmunosupresores);
    case 22:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antineoplasicos);
    case 23:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.corticoides);
    case 24:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antiparasitarios);
    case 25:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.laxantes);
    case 26:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antitusivos);
    case 27:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.mucoliticos);
    case 28:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.vasodilatadores);
    case 29:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antiespasmodicos);
    case 30:
      return renderGrupo(numKey, cerrarGrupo, medicamentosAnalg.antidemencia);
    default:
      return null;
  }
}

function renderGrupo(numKey, cerrarGrupo, medicamentos) {
  return (
    <section className="farmacologicos-container">
      <span className='close-tag' onClick={cerrarGrupo}>x</span>
      <Grupofarma
        Grupofarmacologico={gruposFarmacologicos[numKey].nombre}
        GrupoTexto={gruposFarmacologicos[numKey].texto}
        GrupoAccion={gruposFarmacologicos[numKey].accion}
        medicamentos={medicamentos}
      />
    </section>
  );
}
