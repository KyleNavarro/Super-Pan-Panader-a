import fondo from "../../assets/panMain.webp";
import "./index.css";

const Header = () => {
  return (
    <header style={{ backgroundImage: `url(${fondo})` }}>
      <h1>
        Super Pan
        <span>
          <br /> Fresco Todos <br />
          Los Días
        </span>
      </h1>
      <p>
        El mejor pan artesanal del <br /> área metropolitana de Bucaramanga, con
        9 años <br /> de tradición y sabor incomparable.
      </p>
      <div>
        <button
          onClick={() => {
            const section = document.getElementById("locations");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Visitanos
        </button>
      </div>
    </header>
  );
};

export default Header;
