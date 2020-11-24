import React from "react";
import { render, Text } from "ink";
import useStdoutDimensions from "ink-use-stdout-dimensions";

const App = () => {
	const [columns, rows] = useStdoutDimensions();
	return (
		<Text>
			{columns}×{rows}
		</Text>
	);
};

const { unmount } = render(<App />);

setTimeout(() => unmount(), 30_000);
