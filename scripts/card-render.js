const $pricingList = document.getElementById("pricing-list");


function createPricingCard(plan, billingCycle) {
  // Card
  const card = document.createElement("li");
  card.classList.add("pricing-card", "stack");

  if (plan.featured) {
    card.classList.add("pricing-card--featured")
  }

  // Name
  const name = document.createElement("h2");
  name.classList.add("pricing-card__name");
  name.textContent = plan.name;

  // Price
  const price = document.createElement("p");
  price.classList.add("pricing-card__price", "cluster");
  const currency = document.createElement("span");
  currency.classList.add("pricing-card__currency")
  currency.textContent = "$";
  const amount = document.createElement("strong");
  amount.classList.add("pricing-card__amount");
  amount.textContent = plan.price[billingCycle].toFixed(2);
  price.append(currency, amount);

  // Features
  const features = document.createElement("ul");
  features.classList.add("pricing-card__features", "stack");
  plan.features.forEach(item => {
    const feature = document.createElement("li");
    feature.classList.add("pricing-card__feature")
    feature.textContent = item;
    features.append(feature);
  });

  // Link
  const link = document.createElement("a");
  link.classList.add("pricing-card__link");
  link.href = "#";
  link.textContent = plan.buttonText;


  card.append(name, price, features, link);

  return card;
}



function renderPricingCards(plans, billingCycle) {
  $pricingList.textContent = "";

  plans.forEach(plan => {
    $pricingList.append(createPricingCard(plan, billingCycle));
  });
}

export default renderPricingCards;
