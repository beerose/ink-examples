import React from "react";
import { render, Text, useInput, useApp, useStdout } from "ink";

const App = () => {
	const { exit } = useApp();
	const { write } = useStdout();

	useInput((input) => {
		if (input === "q") {
			write("exiting...");
			exit();
		}
	});

	return <Text>Hello!</Text>;
};

render(<App />);
