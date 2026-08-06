import pricingPlans from "./pricing-data.js";
import renderPricingCards from "./card-render.js";

function main() {
  renderPricingCards(pricingPlans, "monthly");
}
main();