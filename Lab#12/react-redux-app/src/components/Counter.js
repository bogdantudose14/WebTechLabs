import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch(); // no param, returns a function which we can execute

  // we provide a function to the useSelector() which basically determines which piece of data we wanna extract from our store;
  // when using useSelector() React Redux will automatically set up a subscription to the Redux store for this component;
  // changes to the Redux store will cause this component function to be re-executed (will always have the latest values);
  // if the component is removed from the DOM, React Redux would also automatically clear the subscription;

  // useSelector is used to retrieve multiple pieces of data from the state
  const counter = useSelector((state) => state.counter); // give access to the Redux store data
  //useSelector for other state property
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const incrementHandler = () => {
    //dispatch an action (an object with a type property)

    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    //dispatch an action (an object with a type property)

    dispatch({ type: "increase", amount: 5 }); // give extra data/payload to the action, the name is up to us
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {show && <div className="counter-value">{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
