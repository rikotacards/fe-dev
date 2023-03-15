import React from "react";

function throttle(cb: any, delay = 1000) {
  let shouldWait = false
  let waitingArgs: any
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args: any) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeoutFunc, delay)
  }
}

export const ThrottleExample: React.FC = () => {
  React.useEffect(() => {

  },[])
  const [count,setCount] = React.useState(0);
  let val = 0;
  const increment = () => {
    console.log('vl')
    val++
  }
  const throttleIncrement = throttle(increment)
  document.addEventListener('mousemove',throttleIncrement)

  return (
    <div>
      <h2>Throttle Example</h2>
      {val}
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};
