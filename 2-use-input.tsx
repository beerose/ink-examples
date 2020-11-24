import React, { useState } from "react";
import { render, Text, useInput } from "ink";

const UserInput = () => {
	const [pressedKey, setPressedKey] = useState<string | null>(null);

	useInput((input, key) => {
		if (input === "q") {
			setPressedKey("q");
		}

		if (key.leftArrow) {
			setPressedKey("left arrow");
		}

		if (key.escape) {
			setPressedKey("escape");
		}
	});

	return <Text>{pressedKey}</Text>;
};

render(<UserInput />);
