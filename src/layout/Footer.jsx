import { Link } from "react-router";

const Footer = () => {
  const DATE = new Date();
  const FULL_YEAR = DATE.getFullYear()
  return ( 
    <footer className="mt-10 pt-6 border-t border-t-gray-950">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 mb-10">
        <aside className="col-span-1 sm:col-span-6 lg:col-span-9">
          <h2 className="text-left font-medium text-lg text-gray-950">Punto Ticket</h2>
          <small className="text-left block leading-1 md:w-3/6 font-light text-gray-950">Somos más que una boletería: somos parte de la industria del entretenimiento. Colaboramos estrechamente con los productores y artistas más importantes a nivel nacional e internacional para llevar los shows que sueñas a los mejores escenarios. Al elegir PuntoTicket, eliges a un socio comprometido con la cultura y el entretenimiento en Chile, que se esfuerza día a día para que cada evento sea un recuerdo inolvidable.</small>
        </aside>
        <nav className="col-span-1 sm:col-span-6 lg:col-span-3">
          <ul className="flex flex-col sm:justify-between md:block gap-2 sm:gap-1">
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1 text-gray-950" to="/">Inicio</Link></li>
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1 text-gray-950" to="/events" end>Todos los Eventos</Link></li>
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1 text-gray-950" to="/about-us">Nosotros</Link></li>
          </ul>
        </nav>
      </div>
      
      <p className="text-center text-xs border-t border-t-gray-950 pt-4 pb-8 text-gray-950">{FULL_YEAR}</p>
    </footer>
   );
}
 
export default Footer;