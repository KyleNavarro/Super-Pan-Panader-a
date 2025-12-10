import iconLocation from "../../../assets/iconLocation.png";
import styleLocation from "../../../components/Locations/Locations.module.css";

export const Branches = [
  {
    id: 1,
    logo: iconLocation,
    name: "panadería pepito",
    address: "calle 68b N24a-03 GIRON MONTEVERDI",
  },
  {
    id: 2,
    logo: iconLocation,
    name: "panadería pepito",
    address: "calle siempre viva 10#45-14",
  },
  {
    id: 3,
    logo: iconLocation,
    name: "panadería pepito",
    address: "calle siempre viva 10#45-14",
  },
  {
    id: 4,
    logo: iconLocation,
    name: "panadería pepito",
    address: "calle siempre viva 10#45-14",
  },
  {
    id: 5,
    logo: iconLocation,
    name: "panadería pepito",
    address: "calle siempre viva 10#45-14",
  },
  {
    id: 6,
    logo: iconLocation,
    name: "panadería pepito",
    address: "calle siempre viva 10#45-14",
  },
  {
    id: 7,
    logo: iconLocation,
    name: "panadería pepito",
    address: "calle siempre viva 10#45-14",
  },
  {
    id: 8,
    logo: iconLocation,
    name: "panadería pepito",
    address: "calle siempre viva 10#45-14",
  },
];

interface BranchCardProps {
  logo: string;
  name: string;
  address: string;
}

const getMapsLink = (address: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
};

const Cards = ({ logo, name, address }: BranchCardProps) => {
  return (
    <div className={styleLocation.cardContainer}>
      <img src={logo} alt="icon de locations" className={styleLocation.icon} />
      <h3 className={styleLocation.title}>{name}</h3>
      <p className={styleLocation.parrafo}>{address}</p>
      <button
        onClick={() => {
          window.open(getMapsLink(address), "_blank", "noopener,noreferrer");
        }}
      >
        Ver Ubicación
      </button>
    </div>
  );
};

export default Cards;
