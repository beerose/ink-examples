import React from "react";
import { render, Text, Box, Newline } from "ink";
import useStdoutDimensions from "ink-use-stdout-dimensions";

const App = () => {
	const [columns, rows] = useStdoutDimensions();

	return (
		<Box>
			<Text>
				{columns}×{rows}
			</Text>
			<Newline />
		</Box>
	);
};

const { unmount } = render(<App />, {
	exitOnCtrlC: false,
	debug: true,
});

setTimeout(() => unmount(), 30_000);
