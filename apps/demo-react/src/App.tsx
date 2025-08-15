import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { cl } from "@devohda/design-system-react";
// import { cx } from "@devohda/design-system-vite-plugin";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<p>Count: {count}</p>
		</>
	);
}

export default App;
