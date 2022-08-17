import vault from "../../../vault.json";
import Link from "../Link";
const Menu = (classList, classItem, classLink) => {
  const renderItemMenu = (elem) => {
    return `<li class="${classItem}"><a class="${classLink} txt-main">${elem}</a></li>`;
  };

  return `
    <nav>
    
      <ul class="${classList}">
      ${Link("link-product menu-list__item-link txt--dark txt-main", "/product", "О продукте")}
        ${vault.menu.map(renderItemMenu).join("")}
      </ul>
    </nav>
  `;
};

export default Menu;
