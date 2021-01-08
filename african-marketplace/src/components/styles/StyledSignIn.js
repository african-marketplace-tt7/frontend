import styled from "styled-components";
import img from "../../assets/images/banner.jpg";

const StyledSignIn = styled.div`
	.signIn {
		background: url(${img});
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		text-align: center;
		padding-top: 25%;
		color: #fdfdfd;
		font-weight: bold;
	}
	.loginForm {
		margin: 2%;
	}
	.signIn button {
		padding: 0.5% 2%;
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
