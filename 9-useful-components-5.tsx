import React from "react";
import { render, Text, Box, Static, Transform, Spacer, Newline } from "ink";
import Spinner from "ink-spinner";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import Table from "ink-table";

import { data } from "./utils";

const App = () => {
	return (
		<>
			<Text color="green">
				<Spinner type="dots" />
				<Newline />
				<Spinner type="boxBounce" />
				<Newline />
				<Spinner type="weather" />
			</Text>

			<Newline />

			<Gradient name="instagram">
				<BigText text="TypeScript" font="chrome" />
			</Gradient>

			<Newline />

			<Table data={data} />
		</>
	);
};

render(<App />);
