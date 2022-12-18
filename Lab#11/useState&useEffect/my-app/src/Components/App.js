import "./App.css";
import Counter from "./Counter";
import Title from "./Title";

// it is recommended to have a sepparate .css file for every component file
// by convention, React components should be named with capital letter (HTML components have lowercase naming)
function App() {
  return (
    // 'className' attribute is equivalent to the 'class' attribute for HTML tags
    // the JSX code returned in a component function should return ONLY ONE thing
    // ! tip => wrap everything up in a tag or return a single component
    <div className="container">
      <Counter />
      <Title />
    </div>
  );
}

export default App;
