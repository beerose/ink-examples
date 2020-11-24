import React, { useEffect, useState } from "react";
import { render, Box } from "ink";
import ProgressBar from "ink-progress-bar";

const TASKS = 10;

const App = () => {
	const [progress, setProgress] = useState<number>(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((p) => p + 1);
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return <ProgressBar left={TASKS} percent={progress / TASKS} />;
};

render(<App />);
