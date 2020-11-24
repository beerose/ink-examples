import React from "react";
import { render, Text, useInput, useApp } from "ink";

const App = () => {
	const { exit } = useApp();

	useInput((input) => {
		if (input === "q") {
			exit();
		}
	});

	return <Text>Hello!</Text>;
};

render(<App />);
