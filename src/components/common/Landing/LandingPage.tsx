import React from "react";
import Hero from "./Hero";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div``;
const Logo: AnyStyledComponent = styled.img``;

export default () => {
	return (
		<div>
			<Hero></Hero>
			<Title>y</Title>
			<Logo />
		</div>
	);
};
