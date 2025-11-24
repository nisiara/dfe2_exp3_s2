import { PageTitle } from "../components/common/Common";

const AboutUsPage = () => {
  return (  
    <section>
      <PageTitle title='Nosotros'/>
      <h4 className="font-medium text-lg mb-4 text-left text-gray-950">PuntoTicket es la plataforma líder en la venta y distribución de entradas para los eventos más grandes y variados de Chile. Desde nuestro nacimiento, hemos sido el puente entre el público y el espectáculo, asegurando que la experiencia de comprar un ticket sea tan emocionante y fluida como el evento mismo. Nos especializamos en una amplia gama de entretenimiento, abarcando desde conciertos masivos e íntimos, grandes festivales de música y cultura (como el Festival de Viña del Mar), hasta eventos deportivos cruciales, obras de teatro y shows familiares. Nuestra misión es simple: garantizar que nadie se quede fuera del momento que le importa.</h4>
      <p className="font-light text-sm leading-5 mb-3 text-left text-gray-950">La seguridad y la transparencia son los pilares de nuestro servicio. Trabajamos constantemente en la innovación tecnológica, implementando sistemas avanzados para proteger cada transacción, combatir la reventa ilegal y ofrecer una experiencia de compra rápida y confiable. Entendemos el valor de tu tiempo y la importancia de asegurar tu lugar; por ello, nuestra plataforma está optimizada para manejar altos volúmenes de demanda en segundos, ofreciendo múltiples métodos de pago y la conveniencia de entradas digitales a través de nuestro sitio web y aplicación móvil. Con PuntoTicket, tienes la garantía de que tu entrada es 100% auténtica y está lista para ser escaneada.</p>
      <p className="font-light text-sm leading-5 mb-3 text-left text-gray-950">Somos más que una boletería: somos parte de la industria del entretenimiento. Colaboramos estrechamente con los productores y artistas más importantes a nivel nacional e internacional para llevar los shows que sueñas a los mejores escenarios. Nuestro equipo de soporte está dedicado a asistirte en cada paso, desde la preventa exclusiva hasta el ingreso al recinto. Al elegir PuntoTicket, eliges a un socio comprometido con la cultura y el entretenimiento en Chile, que se esfuerza día a día para que cada evento sea un recuerdo inolvidable.</p>
    </section>

   );
}
 
export default AboutUsPage;