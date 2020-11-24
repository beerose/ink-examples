import React, { useEffect, useState } from "react";
import { render, Text, Box, Static, Transform, Spacer, Newline } from "ink";
import MultiSelect from "ink-multi-select";

// select with spacebar

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

	return <MultiSelect items={items} onSelect={undefined} />;
};

render(<App />);
