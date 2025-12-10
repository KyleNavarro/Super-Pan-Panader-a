import pan from "../../assets/pan.webp";
import postres from "../../assets/postres.webp";
import pasteles from "../../assets/pasteles.webp";
import BakeContainer from "./Bake.module.css";
import Card from "./Bake.module.css";
import Section from "./Bake.module.css";

const Bake = () => {
  return (
    <>
      <div className={Section.Section}>
        <h2>Que Hacemos</h2>
        <section className={BakeContainer.BakeContainer}>
          <div className={Card.Card}>
            <img src={pan} alt="imagen del pan" />

            <h3>Pan Artesanal</h3>
            <p>
              Elaborado con masa madre y horneado diariamente para ofrecer sabor
              auténtico, textura crujiente y aroma irresistible.
            </p>
          </div>

          <div className={Card.Card}>
            <img src={postres} alt="imagen de postres" />
            <h3>Postres</h3>
            <p>
              Delicias dulces hechas con recetas tradicionales y frescura
              diaria, ideales para acompañar tus momentos especiales.
            </p>
          </div>
          <div className={Card.Card}>
            <img src={pasteles} alt="imagen de pasteles" />
            <h3>Pasteles</h3>
            <p>
              Pasteles esponjosos y decorados con dedicación, perfectos para
              celebraciones, fechas especiales o simplemente antojos.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bake;
