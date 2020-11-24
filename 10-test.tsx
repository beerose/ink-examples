import React, { useState, useEffect } from "react";
import { Text } from "ink";
import { render } from "ink-testing-library";

const Counter = ({ count }: { count: number }) => <Text>Count: {count}</Text>;

const { stdout, rerender } = render(<Counter count={0} />);
rerender(<Counter count={1} />);

console.log(stdout.frames);
