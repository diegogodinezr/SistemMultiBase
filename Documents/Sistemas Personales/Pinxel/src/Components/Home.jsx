import VideoBackground from "./VideoBackground";
import "../css/Home.css";
import Marcas from "./Marcas";
import Services from "./Services";
import Trabajos from "./Trabajos";
import Follow from "./Follow";
import ScrollToTopButton from "./ScrollToTopButton"; // Importar el botón flotante

function Home() {
  return (
    <>
      <div className="videoP" >
        <VideoBackground />
      </div>

      <section id="marcas">
        <Marcas />
      </section>

      <section id="servicios">
        <Services />
      </section>

      <section id="trabajos">
        <Trabajos />
      </section>

      <section id="cotizar">
        <Follow />
      </section>

      <ScrollToTopButton /> {/* Botón para scroll hacia arriba */}
    </>
  );
}

export default Home;
