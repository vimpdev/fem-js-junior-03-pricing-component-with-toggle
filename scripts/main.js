import pricingPlans from "./pricing-data.js";
import renderPricingCards from "./card-render.js";

const $toggle = document.getElementById("toggle");

function getBillingCicle() {
  return $toggle.checked ? "monthly" : "annually";
}

$toggle.addEventListener("change", () => {
  renderPricingCards(pricingPlans, getBillingCicle());
});

function main() {
  renderPricingCards(pricingPlans, getBillingCicle());
}
main();