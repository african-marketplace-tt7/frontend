import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import StyledHeaderNav from "./styles/StyledHeaderNav";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//Store
import { fetchCurrentUser } from "../store/actions/currentUserActions";
import { fetchAllMarkets } from "../store/actions/marketActions";

const HeaderNav = (props) => {
	const { userState, history } = props;
	const userData = userState.userData;

	return (
		<StyledHeaderNav>
			<header className="wrapper alt ">
				<div className="headernav">
					<h2>Welcome Back {userData.firstName}!</h2>
					<div className="buttons">
						<button className=" ">Home</button>
						<button
							className="primary"
							onClick={(e) => {
								e.preventDefault();
								localStorage.removeItem("token");
								history.push("/login");
								// axiosWithAuth()
								// 	.get("/oauth/revoke-token")
								// 	.then((res) => {
								// 		console.log(res);
								// 	})
								// 	.catch((err) => {
								// 		console.log(err);
								// 	});
							}}
						>
							Logout
						</button>
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
