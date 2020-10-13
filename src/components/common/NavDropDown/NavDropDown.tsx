import React, { FunctionComponent, useEffect, useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";

interface INavButtonProps {
	title: string;
	linkData?: string;
}

const DropdownStyle: AnyStyledComponent = styled.div`
	padding-left: 20px;
	display: inline-block;
	padding-right: 10px;
`;
const DropdownButton: AnyStyledComponent = styled.button`
	outline: 0;
	border: 0;
	cursor: pointer;
	background: none;
`;
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
const NavDropDown: FunctionComponent<INavButtonProps> = ({
	title,

	linkData,
	children,
}): JSX.Element => {
	const menu = <Menu>{children}</Menu>;
	return (
		<DropdownStyle>
			<Dropdown overlay={menu}>
				<DropdownButton
					className="ant-dropdown-link"
					onClick={(e: any) => e.preventDefault()}
				>
					<LinkStyle>{title}</LinkStyle>
				</DropdownButton>
			</Dropdown>
		</DropdownStyle>
	);
};

export { NavDropDown };
