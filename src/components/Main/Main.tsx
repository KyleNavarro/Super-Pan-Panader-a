import MainContainer from "./Main.module.css";

const Main = () => {
  return (
    <div className={MainContainer.MainContainer}>
      <h2>Nuestra Historia</h2>
      <p>
        Con 9 años de experiencia llevando el mejor sabor a Bucaramanga, nuestra
        panadería se ha convertido en un referente de calidad y tradición en la
        región. Hoy contamos con 7 sedes en el área metropolitana, pensadas para
        estar más cerca de ti y compartir contigo el placer de un buen pan todos
        los días.
        <br />
        <br />
        Ofrecemos una amplia variedad de productos: pan tradicional, pan
        relleno, panes integrales, tortas caseras y dulces artesanales
        elaborados con recetas únicas y dedicación en cada detalle. <br />
        Nos apasiona crear un ambiente cálido y familiar donde cada visita sea
        más que una compra, sea una experiencia. Aquí encuentras frescura, sabor
        y confianza en cada bocado.
      </p>
    </div>
  );
};

export default Main;
