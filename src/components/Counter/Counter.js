import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count}times`;
    //очистка эффекта
  })

  return (
    <div className="counter">
      <p>Clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Counter;