import React from 'react';

export default function MarketLocationCard(props) {
  const { name, street, city, country } = props.marketLocation;
  return (
    <div>
      <h2>{name}</h2>
      <p>{street}</p>
      <p>{city}</p>
      <p>{country}</p>
    </div>
  );
}
