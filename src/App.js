import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import style from "./style.less";

const App = () => {

	//Lazy loading a module can be done with the use of dynamic imports as shown below.
	// import('modulePathHere').then(({ default: export })=> {
	// 	console.log(export);
	// });

	//Lazy loading a component or dynamically importing a component can be done as follows.
	const Test = React.lazy(() => import('./Test'))

	return (
		<div className={style.header}>
			<p>React app!</p>
			<Suspense fallback={<p>Loading</p>}>
				<Test />
			</Suspense>
		</div>
	);
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
