import React from "react";
import { render, Text, useInput, useApp, useFocus } from "ink";

const App = () => {
	const { exit } = useApp();
	const { isFocused } = useFocus();

	useInput((input) => {
		if (input === "q") {
			exit();
		}
	});

	return <Text color={isFocused ? "red" : "white"}>Hello!</Text>;
};

render(<App />);
