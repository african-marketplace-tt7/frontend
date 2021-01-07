import React from 'react';

export default function ItemCard(props) {
  const {
    commodityCat,
    subCat,
    commodityProduct,
    description,
    salePirce,
    quantity,
    marketsSold,
  } = props.item;
  return (
    <div>
      <h2>{commodityProduct}</h2>
      <p>Category: {commodityCat}</p>
      <p>Sub Category: {subCat}</p>
      <p>Description: {description}</p>
      <p>Price: {salePirce}</p>
      <p>Quantity: {quantity}kgs</p>
      <div>
        Markets Sold:{' '}
        {marketsSold.map(market => (
          <p>{market.name}</p>
        ))}
      </div>
    </div>
  );
}
