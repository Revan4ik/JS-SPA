import Button from "../Button";

const Promo = () => {
  return `
    <section class="promo">
      <div class="container">
        <div class="promo-wrap">
          <h1 class="title-h1 promo-title txt--dark">Кресла Samurai на выгодных условиях по всей стране <img class="flag" src="https://png.monster/wp-content/uploads/2022/05/png.monster-980.png";</h1>
          <p class="promo-txt txt--dark">Здесь вам не придется покупать товар в слепую — проведите тест-драйв перед покупкой</p>
          ${Button("Запись на тест-драйв", "btn-blue")}
        </div>
      </div>
    </section>
    `;
};

export default Promo;
