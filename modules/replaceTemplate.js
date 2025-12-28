//replaceTemp function
module.exports = (temp, product) => {
  let output = temp.replace(/{%ProductName%}/g, product.productName);
  output = output.replace(/{%Image%}/g, product.image);
  output = output.replace(/{%ProductPrice%}/g, product.price);
  output = output.replace(/{%From%}/g, product.from);
  output = output.replace(/{%ProductNutrients%}/g, product.nutrients);
  output = output.replace(/{%ProductQauntity%}/g, product.quantity);
  output = output.replace(/{%Description%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%Not_Organic%}/g, "not-organic");
  return output;
};
