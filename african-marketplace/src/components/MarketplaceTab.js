import React, { useState } from "react";
import { connect } from "react-redux";

import MarketLocationCard from "./MarketLocationCard";

const MarketplaceTab = (props) => {
	const { marketLocations } = props.allMarkets;
	const { userMarkets } = props;

	const [filterView, setFilterView] = useState();

	const onChangeFilterView = (e) => {};

	return (
		<div className="tab-section">
			<section className="sidebar">
				<label>View Editor</label>
				<select value={filterView} type="select">
					<option value="">All Markets</option>
					<option value="">Your Markets</option>
				</select>
			</section>
			{props.allMarkets.isLoading && <p>loading Marketplaces...</p>}
			<div className="marketplace" datatype>
				{marketLocations &&
					marketLocations.map((market) => (
						<MarketLocationCard market={market} key={market.marketlocationid} />
					))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		allMarkets: state.marketsReducer,
		userMarkets: state.userReducer.userData.marketLocations,
	};
};

export default connect(mapStateToProps)(MarketplaceTab);
