import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import styled, { AnyStyledComponent } from "styled-components";
import Nav from "./components/common/Nav/Nav";
import NavLayout from "./components/sections/NavLayout";
import { Route, Switch } from "react-router-dom";

const Example: AnyStyledComponent = styled.div``;

const MainContent = () => {
	return (
		<Switch>
			<Route path="/" exact component={Nav} />
			{/* <Route path="/account" component={Account} /> */}
		</Switch>
	);
};

export default () => {
	return (
		<div>
			<NavLayout />
		</div>
	);
};
