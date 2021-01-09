import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//Actions
import { addSaleItem } from "../store/actions/currentUserActions";

const AddItem = ({ addSaleItem, userState }) => {
	const initalFormValues = {
		commodityCat: "",
		subCat: "",
		commodityProduct: "",
		description: "",
		salePrice: 0,
		quantity: 0,
		marketsSold: [],
	};

	const catArr = [
		"-Select Category-",
		"Animal Products",
		"Beans",
		"Cereals - Maize",
		"Cereals - Other",
		"Cereals - Rice",
		"Fruits",
		"Other",
		"Peas",
		"Roots & Tubers",
		"Seeds & Nuts",
		"Vegetables",
	];

	const animalProductsSub = ["Animal Products", "Livestock", "Poultry"];
	const cerealsOtherSub = ["Barley", "Millet", "Sorghum", "Wheat"];
	const fruitsSub = [
		"Avocado",
		"Bananas",
		"Fruits",
		"Lemons",
		"Limes",
		"Mangoes",
		"Oranges",
		"Pawpaw",
		"Pineapples",
	];
	const otherSub = ["Coffee", "Tea", "Tobacco", "Vanilla"];
	const rootsAndTubersSub = ["Cassava", "Potatoes"];
	const seedsAndNutsSub = ["Nuts", "Simsim", "Sunflowers"];
	const vegetablesSub = [
		"Brinjals",
		"Cabbages",
		"Capsicums",
		"Carrots",
		"Cauliflower",
		"Chillies",
		"Cucumber",
		"Ginger",
		"Kales",
		"Lettuce",
		"Onions",
		"Tomatoes",
	];

	const [formValues, setForumValues] = useState(initalFormValues);

	const getSubCat = (category) => {
		switch (category) {
			case "Animal Products":
				return animalProductsSub.map((animalProduct) => (
					<option value={animalProduct}>{animalProduct}</option>
				));
			case "Beans":
				return <option>Beans</option>;
			case "Cereals - Maize":
				return <option>Cereals - Maize</option>;
			case "Cereals - Other":
				return cerealsOtherSub.map((cereal) => (
					<option value={cereal}>{cereal}</option>
				));
			case "Cereals - Rice":
				return <option>Cereals - Rice</option>;
			case "Fruits":
				return fruitsSub.map((fruit) => <option value={fruit}>{fruit}</option>);
			case "Other":
				return otherSub.map((other) => <option value={other}>{other}</option>);
			case "Peas":
				return <option>Peas</option>;
			case "Roots & Tubers":
				return rootsAndTubersSub.map((root) => (
					<option value={root}>{root}</option>
				));
			case "Seeds & Nuts":
				return seedsAndNutsSub.map((seed) => (
					<option value={seed}>{seed}</option>
				));
			case "Vegetables":
				return vegetablesSub.map((vegetable) => (
					<option value={vegetable}>{vegetable}</option>
				));
			default:
				return <option></option>;
		}
	};

	const handleChange = (e) => {
		setForumValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const submitItemHandler = (e) => {
		e.preventDefault();
		addSaleItem(formValues);
		setForumValues(initalFormValues);
	};

	return (
		<div>
			<form onSubmit={submitItemHandler}>
				<div>
					<label>
						Category:
						<select
							name="commodityCat"
							value={formValues.commodityCat}
							onChange={handleChange}
						>
							{catArr.map((cat) => (
								<option value={cat}>{cat}</option>
							))}
						</select>
					</label>
				</div>
				<div>
					<label>
						Sub Category:
						<select
							name="subCat"
							value={formValues.subCat}
							onChange={handleChange}
						>
							{getSubCat(formValues.commodityCat)}
						</select>
					</label>
				</div>
				<div>
					<label>
						Product:
						<input
							name="commodityProduct"
							type="text"
							value={formValues.commodityProduct}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Description:
						<input
							name="description"
							type="text"
							value={formValues.description}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Quantity (kgs):
						<input
							name="quantity"
							type="number"
							value={formValues.quantity}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Sale Price:
						<input
							name="salePrice"
							type="number"
							value={formValues.salePrice}
							onChange={handleChange}
						/>
					</label>
				</div>
				<button>Add Item</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	userState: state.userReducer,
});

export default connect(mapStateToProps, {
	addSaleItem,
})(AddItem);
