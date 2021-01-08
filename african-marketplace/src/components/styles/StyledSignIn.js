import styled from "styled-components";
import img from "../../assets/images/banner.jpg";

const StyledSignIn = styled.div`
	background: url(${img});
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	text-align: center;
	padding-top: 25%;
	color: #fdfdfd;
	font-weight: bold;

	form .loginForm {
		margin: 2%;
		label input {
			background: rgba(0, 0, 0, 0.6);
			width: 50%;
			margin: 0 auto;
			text-align: center;
		}
	}
	.signIn button {
		margin: 1rem 0;
		font-weight: bold;
		border: none;
		background-color: #eb4933;
		color: #fdfdfd;
	}

	.signIn a {
		color: #fdfdfd;
	}
`;

export default StyledSignIn;
