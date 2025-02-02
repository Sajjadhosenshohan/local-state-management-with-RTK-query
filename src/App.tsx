/* eslint-disable @typescript-eslint/no-unused-vars */

import { Outlet } from "react-router-dom";
import "./App.css";
// import { decrement, increment } from "./Redux/features/counter/counterSlice";
import { useAppDispatch } from "./Redux/hooks";
import Navbar from "./components/layout/Navbar";

function App() {
  const dispatch = useAppDispatch();
  // const { count } = useAppSelector((state) => state.counter1);

  // const dispatchIncrement = (amount: number) => {
  //   dispatch(increment(amount));
  // };

  // const dispatchDecrement = (amount: number) => {
  //   dispatch(decrement(amount));
  // };
  return (
    <div className="max-w-7xl mx-auto">

      <Navbar/>

      <div className="mt-20">
        <Outlet/>
        {/* <h1>Vite + React</h1>
        <h1 className="my-10">count is {count}</h1>

        <div className="card">
          <div className="flex gap-5 justify-center items-center">
            <button
              onClick={() => dispatchIncrement(5)}
              className=" border-2 border-red-700 py-1 px-3 rounded-md hover:bg-red-600 hover:text-white transition-all duration-150 hover:border-red-600 m-10"
            >
              +
            </button>
            <button
              onClick={() => dispatchDecrement(10)}
              className=" border-2 border-red-700 py-1 px-3 rounded-md hover:bg-red-600 hover:text-white transition-all duration-150 hover:border-red-600 m-10"
            >
              -
            </button>
          </div>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </div>
    </div>
  );
}

export default App;
