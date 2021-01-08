import React from "react";
export default function MarketLocationCard({ market }) {
	const { name, street, city, country } = market;
	return (
		<div className="market-card">
			<div className="info-container">
				<h2>{name}</h2>
				<p>{street}</p>
				<p>{city}</p>
				<p>{country}</p>
				<button className="primary small">Add Market</button>
			</div>
		</div>
	);
}
