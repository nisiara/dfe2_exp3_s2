import { Link } from "react-router";

const Footer = () => {
  const DATE = new Date();
  const FULL_YEAR = DATE.getFullYear()
  return ( 
    <footer className="mt-10 pt-6 border-t border-t-slate-400">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 mb-10">
        <aside className="col-span-1 sm:col-span-6 lg:col-span-9">
          <h2 className="text-left font-medium text-lg text-slate-500">Clínica VitaSalud <small className="block uppercase text-xs mb-2">Atención Médica</small></h2>
          <small className="text-left block leading-1 md:w-3/6 font-light text-slate-500">Nuestra misión principal es ofrecer una atención médica de la más alta calidad, poniendo siempre la salud y el bienestar de nuestros pacientes en el centro de todo lo que hacemos. Creemos firmemente que el camino hacia una vida saludable comienza con una relación de confianza y un cuidado integral y personalizado.</small>
        </aside>
        <nav className="col-span-1 sm:col-span-6 lg:col-span-3">
          <ul className="flex flex-col sm:justify-between md:block gap-2 sm:gap-1">
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1 text-slate-500" to="/">Inicio</Link></li>
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1 text-slate-500" to="/patients" end>Lista de Pacientes</Link></li>
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1 text-slate-500" to="/about-us">Nosotros</Link></li>
          </ul>
        </nav>
      </div>
      
      <p className="text-center text-xs border-t border-t-slate-400 pt-4 pb-8 text-slate-500">{FULL_YEAR}</p>
    </footer>
   );
}
 
export default Footer;