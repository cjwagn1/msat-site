import React, { FunctionComponent, useEffect, useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";

interface INavButtonProps {
	link: string;
	linkData?: string;
}

const DropdownButton: AnyStyledComponent = styled.button`
	outline: 0;
	border: 0;
	cursor: pointer;
	background: none;
	font-size: 20px;

	&:hover {
		color: red;
	}
`;
const NavDropDownButton: FunctionComponent<INavButtonProps> = ({
	link,
	linkData,
	children,
}): JSX.Element => {
	return (
		<div>
			<Link style={{ textDecoration: "none" }} to={link}>
				<Menu.Item>
					<DropdownButton>{children}</DropdownButton>
				</Menu.Item>
			</Link>
		</div>
	);
};

export { NavDropDownButton };
