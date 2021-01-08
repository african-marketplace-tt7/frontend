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
		background-size: cover;
		position: relative;
		display: flex;
		padding: 0 10px;
		padding-bottom: 4px;
		align-items: flex-end;
		justify-content: space-between;
		border-bottom: solid 10px black;
		h3 {
			margin-bottom: 0;
		}
	}
`;

export default StyledBannerTabs;
