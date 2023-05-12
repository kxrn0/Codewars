function nbMonths(priceOld, priceNew, savingPerMonth, percentLossPerMonth) {
  if (priceOld >= priceNew) return [0, priceOld - priceNew];

  let months;

  months = 0;
  percentLossPerMonth /= 100;

  for (let i = 0; priceOld + months * savingPerMonth <= priceNew; i++) {
    priceOld -= percentLossPerMonth * priceOld;
    priceNew -= percentLossPerMonth * priceNew;
    months++;

    if (!(i % 2)) percentLossPerMonth += 0.005;
  }

  return [months, Math.round(priceOld + months * savingPerMonth - priceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
