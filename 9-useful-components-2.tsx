import React, { useEffect, useState } from "react";
import { render, Text, Box, Static, Transform, Spacer, Newline } from "ink";
import SelectInput from "ink-select-input";

const App = () => {
	const items = [
		{
			label: "First",
			value: "first",
		},
		{
			label: "Second",
			value: "second",
		},
		{
			label: "Third",
			value: "third",
		},
	];

	return (
		<SelectInput items={items} onSelect={(v) => console.log({ selected: v })} />
	);
};

render(<App />);
