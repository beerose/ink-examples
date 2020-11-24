import React, { useEffect, useRef } from "react";
import { render, measureElement, Box, Text, DOMElement } from "ink";

const Example = () => {
	const ref = useRef<DOMElement>(null);

	useEffect(() => {
		if (ref.current) {
			const { width, height } = measureElement(ref.current);
			console.log({ width, height });
		}
	}, []);

	return (
		<Box width={100} flexDirection="column" ref={ref}>
			{Array.from(
				{ length: Math.floor(Math.random() * Math.floor(20)) + 1 },
				(_, i) => i
			).map((i) => (
				<Box key={i}>
					<Text>{i}</Text>
				</Box>
			))}
		</Box>
	);
};

render(<Example />);
