import React, { useState } from "react";
import "./ToggleStyle.css";
// const Toggle = () => {
//     return (
//         <div className='toggle'>

//         </div>
//     );
// };

// const Toggle2 = () => {
//     return (
//         <div className='toggle'>

//         </div>
//     );
// };

// export default Toggle;

function Toggle() {
  /**
   * enabling state: useState(initialize value)
   * initialize state: useState(false)
   * readinh state
   * update state
   */
  const array = useState(false);
  console.log(array);
  const [on, setOn] = useState(false);
  //   console.log(on, setOn);
  console.log(on);
  //   <div className="toggle" onClick="toggle"></div>
  const hendleToggle = () => {
    // console.log("cliked");
    // setOn(callback) -> setOn(prevState -> !prevState)
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={hendleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
