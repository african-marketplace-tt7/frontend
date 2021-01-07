import styled from "styled-components";

const StyledHeaderNav = styled.div`
	.headernav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1rem;
		h3,
		.buttons {
			margin-bottom: 1.8rem;
		}
		.buttons button {
			margin-left: 1rem;
		}
	}
`;

export default StyledHeaderNav;
