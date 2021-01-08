import React from "react";
import { connect } from "react-redux";

import MarketLocationCard from "./MarketLocationCard";

const MarketplaceTab = (props) => {
	const { marketLocations } = props.markets;

	return (
		<div className="tab-section">
			<section className="sidebar">
				<label>View Editor</label>
				<select type="select">
					<option value="">All Markets</option>
					<option value="">Your Markets</option>
				</select>
			</section>
			{props.isLoading && <p>loading Marketplaces...</p>}
			<div className="marketplace">
				{marketLocations &&
					marketLocations.map((market) => (
						<MarketLocationCard market={market} />
					))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		markets: state.marketsReducer,
	};
};

export default connect(mapStateToProps)(MarketplaceTab);
