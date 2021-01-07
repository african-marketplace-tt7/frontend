import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import StyledHeaderNav from "./styles/StyledHeaderNav";

//Store
import { fetchCurrentUser } from "../store/actions/currentUserActions";

const HeaderNav = (props) => {
	const { fetchCurrentUser, userState } = props;
	const userData = userState.userData;

	useEffect(() => {
		fetchCurrentUser();
	}, []);

	return (
		<StyledHeaderNav>
			<header className="headernav">
				<h2>Welcome Back {userData.firstName}!</h2>
				<div className="buttons">
					<button className=" ">Home</button>
					<button className="primary">Logout</button>
				</div>
			</header>
		</StyledHeaderNav>
	);
};

const mapStateToProps = (state) => {
	console.log("state", state);
	return {
		userState: state.userReducer,
	};
};

export default connect(mapStateToProps, {
	fetchCurrentUser,
})(HeaderNav);
