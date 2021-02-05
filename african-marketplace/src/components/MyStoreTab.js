import React from "react";
import { connect } from "react-redux";

import AddItem from "./AddItem";

//Actions
import {
	fetchCurrentUser,
	deleteSaleItem,
} from "../store/actions/currentUserActions";

const MyStoreTab = (props) => {
	const { itemsForSale } = props.userState.userData;

	const handleDelete = (e) => {
		props.deleteSaleItem(e.target.dataset.key);
	};

	return (
		<div className="tab-section">
			<section className="sidebar">
				<label>View Editor</label>
				<AddItem />
			</section>
			<div className="product-list">
				<h3>Your Products</h3>
				{itemsForSale.map((item) => {
					return (
						<>
							<p>{item.commodityProduct}</p>
							<button data-key={item.itemid} onClick={handleDelete}>
								Delete
							</button>
						</>
					);
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
	deleteSaleItem,
})(MyStoreTab);
