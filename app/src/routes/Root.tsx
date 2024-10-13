import reactLogo from "../assets/react.svg";
import pyLogo from "/py.svg";
import "../App.css";

function Root() {
  return (
    <div className="container">
      <h1>Flask + React</h1>
      <div className="flex justify-center">
        <a href="" target="_blank"></a>
        <img src={pyLogo} className="logo" alt="Python logo" />
        <a href="https://react.dev" target="_blank"></a>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </div>
  );
}

export default Root;
