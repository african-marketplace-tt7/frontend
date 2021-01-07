import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import StyledBannerTabs from "./styles/StyledBannerTabs";

const BannerTabs = () => {
	return (
		<StyledBannerTabs>
			<Tabs>
				<div className="hero-image-container">
					<h3>What would you like to do?</h3>
					<TabList className="tablist">
						<Tab>Marketplace</Tab>
						<Tab>My Shop</Tab>
						<Tab>Business Tools</Tab>
						<Tab>Edit Profile</Tab>
					</TabList>
				</div>

				<TabPanels>
					<TabPanel>
						<p>Browse Marketplaces</p>
					</TabPanel>
					<TabPanel>
						<p>View Your Shop</p>
					</TabPanel>
					<TabPanel>
						<p>Strengthen Your Business</p>
					</TabPanel>
					<TabPanel>
						<p>Edit Profile</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</StyledBannerTabs>
	);
};

export default BannerTabs;
