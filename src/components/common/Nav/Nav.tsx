import React, { FunctionComponent } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { useLocation, Link } from "react-router-dom";

interface INavChildrenProps {
	title: string;
	logo: string;
	link: string;
	linkDataCallBack?: Function;
}

const Box: AnyStyledComponent = styled.nav`
	background-color: #21212199;
	height: 70px;
	width: 100%;
	backdrop-filter: blur(20px);
	position: fixed;
	color: white;

	top: 0;
	z-index: 3;
	@supports not (backdrop-filter: blur(20px)) {
		background-color: 292929ef;
	}
	&:hover {
		color: white;
	}
`;
const Constraint: AnyStyledComponent = styled.div`
	display: flex;
	height: 100%;
	max-width: 1300px;
	margin: auto;
`;
const TitleLayout: AnyStyledComponent = styled.div`
	flex: 1;
	display: flex;
	height: 100%;
`;
const List: AnyStyledComponent = styled.li`
	padding: 20px;
	list-style-type: none;
`;
const HomeLinkStyle: AnyStyledComponent = styled.a`
	text-decoration: none;
	color: white;
	font-family: "Poppins", sans-serif;
	display: inline-block;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom-color: white;
	}
	transition: all 0.2s ease-in-out;
	font-size: 18px;
	user-select: none;
	cursor: pointer;
`;
const Text: AnyStyledComponent = styled.div`
	font-size: 24px;
	font-family: "Poppins", sans-serif;
	color: white;
	font-weight: bold;
	border-bottom: 2px solid transparent;
	&:hover {
		border-bottom-color: white;
	}
	transition: all 0.1s ease-in-out;
	@media (max-width: 550px) {
		font-size: 20px;
	}
	@media (max-width: 510px) {
		font-size: 17px;
	}
	@media (max-width: 490px) {
		font-size: 14px;
	}
`;
const NavLayout: AnyStyledComponent = styled.div`
	display: flex;
	height: 70px;
	padding-left: 30px;

	align-items: center;
`;
const Logo: AnyStyledComponent = styled.img`
	max-height: 80px;
	max-width: 80px;
	padding-right: 20px;

	margin-top: -10px;
`;
const LogoLayout: AnyStyledComponent = styled.div`
	display: inline-block;
`;

const Nav: FunctionComponent<INavChildrenProps> = ({
	title,
	link,
	logo,
	linkDataCallBack,
	children,
}): JSX.Element => {
	return (
		<Box>
			<Constraint>
				<TitleLayout>
					<List>
						<LogoLayout>
							<Logo src={logo} />
							<HomeLinkStyle>
								<Link style={{ textDecoration: "none" }} to={link}>
									<Text>{title}</Text>
								</Link>
							</HomeLinkStyle>
						</LogoLayout>
					</List>
				</TitleLayout>
				<NavLayout>{children}</NavLayout>
			</Constraint>
		</Box>
	);
};

export default Nav;
