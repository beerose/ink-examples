import React, { useEffect, useState } from "react";
import { render, Text, Box, Static, Transform, Spacer, Newline } from "ink";
import TextInput from "ink-text-input";

const App = () => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		console.log({ query });
	}, [query]);

	return (
		<Box>
			<Box marginRight={1}>
				<Text>Enter your query:</Text>
			</Box>

			<TextInput
				value={query}
				onChange={setQuery}
				onSubmit={(v) => console.log({ finalQuery: v })}
			/>
		</Box>
	);
};

render(<App />);
