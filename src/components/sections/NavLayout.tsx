import React from "react";
import Nav from "../common/Nav/Nav";
import { NavButton } from "../common/Nav/NavButtons";
import { NavDropDownButton } from "../common/NavDropDown/NavDropDownButton";
import { NavDropDown } from "../common/NavDropDown/NavDropDown";

export default () => {
	return (
		<div>
			<Nav
				link="/"
				title="MSAT"
				logo="http://web.mst.edu/~mrsat/images/logo/msat_logo_old2.png"
			>
				<NavButton title="Hosting" link="/hosting" />
				<NavButton title="Projects" link="/projects" />
				<NavDropDown title="Projects">
					<NavDropDownButton link="/test">APEX</NavDropDownButton>
					<NavDropDownButton link="/tes2t">MRSAT</NavDropDownButton>
					<NavDropDownButton link="/tes2t">M3</NavDropDownButton>
				</NavDropDown>
			</Nav>
		</div>
	);
};
