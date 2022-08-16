import "./styles/all";
import { onHandleRoute } from "./helper/route";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = document.getElementById("root");

root.innerHTML = `
    ${Header()}
    <main id="main">
      ${Home()}
    </main>
    ${Footer()}
  `;

document
  .querySelector(".link-catalog")
  .addEventListener("click", onHandleRoute);
document
  .querySelector(".link-product")
  .addEventListener("click", onHandleRoute);



document.querySelector(".basket-link").addEventListener("click", onHandleRoute);
