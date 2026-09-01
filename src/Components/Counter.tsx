import { useState } from 'react'
import { toast } from 'react-toastify';
import Error from './Error';

function Counter() {
  const [counter, setCounter] = useState(0);

  function adder() {
    setCounter(counter + 1);
  }

  function subtract() {
    if (counter - 1 < 0) {
      toast.error('Cannot Get Counter Below Zero', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    setCounter(counter - 1);

  }
  return (
    <div>
      <h1>Counter =  {counter}</h1>
      <h3>
        <button onClick={adder}>add</button>
        <button onClick={subtract}>sub</button>
      </h3>
      <Error />
    </div>

  )
}

export default Counter