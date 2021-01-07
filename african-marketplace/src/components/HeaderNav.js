import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import StyledHeaderNav from "./styles/StyledHeaderNav";

//Store
import { fetchCurrentUser } from "../store/actions/currentUserActions";
import { fetchAllMarkets } from "../store/actions/marketActions";

const HeaderNav = (props) => {
	const { fetchCurrentUser, userState, fetchAllMarkets } = props;
	const userData = userState.userData;

	useEffect(() => {
		fetchCurrentUser();
		fetchAllMarkets();
	}, []);

	return (
		<StyledHeaderNav>
			<header className="wrapper alt ">
				<div className="headernav inner">
					<h2>Welcome Back {userData.firstName}!</h2>
					<div className="buttons">
						<button className=" ">Home</button>
						<button className="primary">Logout</button>
					</div>
				</div>
			</header>
		</StyledHeaderNav>
	);
};

const mapStateToProps = (state) => {
	return {
		userState: state.userReducer,
		markets: state.marketsReducer,
	};
};

export default connect(mapStateToProps, {
	fetchCurrentUser,
	fetchAllMarkets,
})(HeaderNav);
