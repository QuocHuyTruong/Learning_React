import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  const [info, setInfo] = useState({
    firstName: "Truong",
    lastName: "Huy",
  });
  useEffect(() => {
    console.log("from input");
  }, [info.lastName]);
  // useEffect(() => {
  //   console.log(count);
  // }, [count]);
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />
      <span className="text-lg font-bold">{count}</span>
      <button
        className="inline-block p-3 bg-green-400 text- rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
