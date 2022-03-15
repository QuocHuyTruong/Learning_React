import React, { useEffect, useState } from "react";

const Timer = () => {
  const [message, setMesssage] = useState("Evondev");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMesssage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
