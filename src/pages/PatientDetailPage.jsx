import { useParams } from "react-router";
import { PageTitle } from "../components/common/Common";

const PatientDetailPage = ({patientList}) => {
  const {id} = useParams()

  const PATIENT = patientList.find( patient => patient.numeroPaciente.toLowerCase() === id)
  
  return (
    <section>
      <PageTitle title='Detalle de Paciente'/>
      <h1 className="text-xl bold mb-2">{PATIENT.nombrePaciente}</h1>
      <ul className="flex gap-3">
        <li className="uppercase text-xs">número paciente: {PATIENT.numeroPaciente}</li>
        <li className="uppercase text-xs">edad: {PATIENT.edad}</li>
        <li className="uppercase text-xs">tipo atención: {PATIENT.atenciones[0].tipoAtencion}</li>
        <li className="uppercase text-xs">especialidad: {PATIENT.atenciones[0].especialidad}</li>
      </ul>
    </section>
  );
}
 
export default PatientDetailPage;