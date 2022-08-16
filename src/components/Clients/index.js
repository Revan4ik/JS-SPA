import varus from "../../assets/img/clients/varus.png";
import dmart from "../../assets/img/clients/dmart.png";
import novaposhta from "../../assets/img/clients/novaposhta.png";
import allo from "../../assets/img/clients/allo.png";
import vodafone from "../../assets/img/clients/vodafone.png";
import citrus from "../../assets/img/clients/citrus.png";

const Clients = () => {
  const arrClients = [
    varus,
    dmart,
    novaposhta,
    allo,
    vodafone,
    citrus,
  ];

  const renderIconClients = (srcWay) => {
    return `
      <div class="clients-wrap__img">
        <img class="clients-wrap__img-icon"src=${srcWay}>
      </div>
    `;
  };

  return `
    <section class="clients">
      <div class="container">
        <h2 class="title-h2 clients-title txt--dark">Наши клиенты</h2>
        <div class="clients-wrap flex-beetwen">
          ${arrClients.map((client) => renderIconClients(client)).join("")}
        </div>
      </div>
    </section>
  
  `;
};

export default Clients;
