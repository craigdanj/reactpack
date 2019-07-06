import React from "react";
import ReactDOM from "react-dom";
import style from "./style.less";

const App = () => {
    return (
        <div className={style.header}>
            <p>React app!</p>
        </div>
    );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));