import styled from "styled-components";
import img from "../../assets/images/banner.jpg";

const StyledBannerTabs = styled.div`
	* {
		/* border: 1px solid green; */
	}

	.hero-image-container {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url(${img});
		height: 10rem;
		background-position: center;
		background-repeat: no-repeat;
		/* background-size: auto; */
		position: relative;
		display: flex;
		padding: 0 10px;
		align-items: flex-end;
		justify-content: space-between;
		border-bottom: solid 3px black;
		h3 {
			margin-bottom: 0;
		}
	}
`;

export default StyledBannerTabs;
