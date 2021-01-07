import React from "react";
import { connect } from "react-redux";

const MarketplaceTab = (props) => {
	return (
		<div>
			<p>
				Hey this is code and it
				asjkdfalksjdbflkasdjbfalskdbfalskdjbfalksdbflaskdfba
			</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		markets: state.marketsReducer,
	};
};

export default connect(mapStateToProps)(MarketplaceTab);
