import React from "react";
import heroImage from "./parallax_earth.jpg";
import styled, { AnyStyledComponent } from "styled-components";

const Hero: AnyStyledComponent = styled.div`
	background-image: url(${heroImage});
	background-position: bottom right;
	height: 100vh;
	width: 100%;
`;

export default () => {
	return (
		<div>
			<Hero></Hero>
		</div>
	);
};
