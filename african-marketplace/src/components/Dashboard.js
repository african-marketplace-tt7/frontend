import "../assets/css/main.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

//Actions
import { fetchCurrentUser } from "../store/actions/currentUserActions";
import { fetchAllMarkets } from "../store/actions/marketActions";

// Components
import HeaderNav from "./HeaderNav";
import { Button } from "./Button";
import BannerTabs from "./BannerTabs";

const Dashboard = ({ fetchCurrentUser, fetchAllMarkets }) => {
	useEffect(() => {
		fetchCurrentUser();
		fetchAllMarkets();
	}, []);

	return (
		<div id="page-wrapper">
			<HeaderNav />
			<BannerTabs />

			{/* <Button title="Click me" type="primary" onClick={() => {
      console.log("Click")
      }} size="large"/>
      <Button title="Click me" type="primary" onClick={() => {
      console.log("Click")
      }}/>
      <Button title="Click me" type="primary" onClick={() => {
      console.log("Click")
      }} size="small"/> */}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.userReducer,
		markets: state.marketsReducer,
	};
};

export default connect(mapStateToProps, {
	fetchCurrentUser,
	fetchAllMarkets,
})(Dashboard);
