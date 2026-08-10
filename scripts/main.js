import pricingPlans from "./pricing-data.js";
import renderPricingCards from "./card-render.js";

const $toggle = document.getElementById("toggle");

function getBillingCycle() {
  return $toggle.checked ? "monthly" : "annually";
}

function updatePricing() {
  const billingCycle = getBillingCycle();

  $toggle.setAttribute("aria-label", billingCycle === "monthly" ? "Monthly billing" : "Annual billing");

  renderPricingCards(pricingPlans, billingCycle);
}

function main() {
  updatePricing();
}


main();

$toggle.addEventListener("change", updatePricing);