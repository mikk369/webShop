module.exports = (temp, product) => {
  let output = temp.replace(/{%TITLE%}/g, product.Title);
  output = output.replace(/{%IMAGE%}/g, product.Poster);
  output = output.replace(/{%PRICE%}/g, product.Price);
  output = output.replace(/{%GENRE%}/g, product.Genre);
  output = output.replace(/{%YEAR%}/g, product.Year);
  return output;
};
