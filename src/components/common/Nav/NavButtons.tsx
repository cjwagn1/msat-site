import React, { FunctionComponent, useEffect, useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { useLocation, Link } from "react-router-dom";

interface INavButtonProps {
	title: string;
	link: string;
	linkData?: string;
}

const LinkStyle: AnyStyledComponent = styled.a`
	text-decoration: none;
	color: white;
	font-family: "Poppins", sans-serif;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom-color: white;
	}
	transition: all 0.2s ease-in-out;
	font-size: 18px;
	user-select: none;
	cursor: pointer;
	@media (max-width: 1024px) {
		display: none;
	}
`;
const Layout: AnyStyledComponent = styled.a`
	padding-left: 30px;
	padding-right: 10px;
`;

const NavButton: FunctionComponent<INavButtonProps> = ({
	title,
	link,
	linkData,
	children,
}): JSX.Element => {
	return (
		<div>
			<Layout>
				<Link style={{ textDecoration: "none" }} to={link}>
					<LinkStyle>{title}</LinkStyle>
				</Link>
			</Layout>
		</div>
	);
};

export { NavButton };
