import React from "react";
import { connect } from "react-redux";

import AddItem from "./AddItem";

//Actions
import { fetchCurrentUser } from "../store/actions/currentUserActions";

const MyStoreTab = (props) => {
	const { itemsForSale } = props.userState.userData;

	return (
		<div className="tab-section">
			<section className="sidebar">
				<label>View Editor</label>
				<AddItem />
			</section>
			<div className="product-list">
				<h3>Your Products</h3>
				{itemsForSale.map((item) => {
					return <p>{item.commodityProduct}</p>;
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		userState: state.userReducer,
	};
};

export default connect(mapStateToProps, {
	fetchCurrentUser,
})(MyStoreTab);
