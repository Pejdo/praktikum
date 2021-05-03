function logPricelist(pricelist) {
  let r = [];
  var sorted = pricelist.sort((a, b) => a.price - b.price);
  sorted.map((a, b) => {
    return a.price == sorted[b == 0 ? (b = 1) : b - 1].price
      ? (r = r.replace(/\n*$/, `, ${a.from} do ${a.to} \n`))
      : (r += `${a.price.toFixed(1)} : ${a.from} do ${a.to} \n`);
  });
  return r;
}

module.exports = logPricelist;
