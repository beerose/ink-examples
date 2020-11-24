import React, { useEffect } from "react";
import { render, Text } from "ink";

const Counter = () => {
	const [counter, setCounter] = React.useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => prev + 1);
		}, 500);

		return () => clearInterval(interval);
	});

	return <Text color="green">{counter} tests passed</Text>;
};

render(<Counter />);
