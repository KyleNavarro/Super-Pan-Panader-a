import Cards from "./CardsLocations/Cards";
import { Branches } from "./CardsLocations/Cards";
import styleLocation from "./Locations.module.css";

const Locations = () => {
  return (
    <section id="locations" className={styleLocation.mainContainer}>
      <h2 className={styleLocation.titleLocation}>Nuestras Sedes</h2>
      <div className={styleLocation.container}>
        {Branches.map((item) => (
          <Cards
            key={item.id}
            logo={item.logo}
            name={item.name}
            address={item.address}
          />
        ))}
      </div>
    </section>
  );
};

export default Locations;
