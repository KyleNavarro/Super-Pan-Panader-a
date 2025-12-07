import fondo from "../../assets/panMain.webp";
import "./index.css";
type Props = {};

const Header = (props: Props) => {
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
        El mejor pan artesanal <br /> del area metropolitana de Bucaramanga
      </p>
      <div>
        <button>Visitanos</button>
      </div>
    </header>
  );
};

export default Header;
