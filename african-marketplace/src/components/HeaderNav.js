import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//Store
import { fetchCurrentUser } from "../store/actions/currentUserActions";

const HeaderNav = (props) => {
	const { fetchCurrentUser } = props;

	useEffect(() => {
		fetchCurrentUser();
	}, []);

	return (
		<nav className="major">
			<h2>Welcome Back</h2>
		</nav>
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
