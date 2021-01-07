import styled from "styled-components";

const StyledSignupForm = styled.div`
	color: rgb(17, 63, 114);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f5de76;
	height: 100vh;
	* {
		// border: 1px solid gold;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		button {
			width: 50%;
			margin: 10px;
			padding: 5px;
			outline: none;
			border: none;
			border-radius: 5px;
			color: rgb(209, 205, 193);
			background-color: rgb(17, 63, 114);
			border: 2px solid transparent; //keeps the box from resizing on hover.
		}
		button:hover {
			box-sizing: border-box;
			background-color: white;
			color: tomato;
			// font-weight: bold;
			border: 2px solid purple;
		}
		.textInputClass,
		.selectInputClass {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
		label {
			display: flex;
			align-items: center;
			margin: 0;
			color: rgb(17, 63, 114);
			input {
				// height: 3px;
			}
			p {
				color: tomato;
				margin: 0;
				font-weight: bold;
			}
		}
	}

	select option,
	select {
		color: tomato;
	}
	input {
		color: purple;
	}
`;

export default StyledSignupForm;
