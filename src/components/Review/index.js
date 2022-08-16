import avatar from "../../assets/img/avatar.png";
import Link from "../Link";

const Review = () => {
  const renderReviewItem = (srcImg) => {
    return `
    <div class="review-item">
    <div class="review-item__top">
      <img class="avatar-client" src="${srcImg}">
      <div class="review-item__top-right">
        <h6 class="title-h6 txt--dark">Наталья, Киев</h6>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z" fill="#FFCE20"/></svg>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z" fill="#FFCE20"/></svg>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z" fill="#FFCE20"/></svg>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z" fill="#FFCE20"/></svg>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z" fill="#FFCE20"/></svg>
      </div>
    </div>
    <div class="review-item__txt">
      <p class="review-item__txt-main txt--dark">С другой стороны выбранный нами инновационный путь создаёт предпосылки качественно новых шагов для всесторонне сбалансированных нововведений. С другой стороны повышение уровня гражданского...</p>
    </div>
    ${Link("review-item__more", "#", "Читать целиком")}
  </div>
    `;
  };

  return `
    <section class="review">
      <div class="container">
        <h2 class="title-h2 review-title txt--dark">Отзывы</h2>
        <div class="review-wrap flex-beetwen">
          ${renderReviewItem(avatar)}
          ${renderReviewItem(avatar)}
        </div>
      </div>
    </section>
  `;
};

export default Review;
