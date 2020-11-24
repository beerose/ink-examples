import React from "react";
import { render, Text, Box, Static, Transform, Spacer } from "ink";

const Components = () => {
	return (
		<>
			<Box
				borderStyle="singleDouble"
				flexDirection="column"
				marginX={1}
				width={10}
				borderColor="red"
			>
				<Text color="green">Hello!</Text>
				<Text color="green">Hello!</Text>
			</Box>

			<Transform transform={(output) => output.toUpperCase()}>
				<Text>Hello World</Text>
			</Transform>

			<Box flexDirection="column" height={10}>
				<Text>Left</Text>
				<Spacer />
				<Text>Right</Text>
			</Box>

			<Static items={["a", "b", "c"]}>
				{(item, index) => <Text key={index}>Item: {item}</Text>}
			</Static>
		</>
	);
};

render(<Components />);
