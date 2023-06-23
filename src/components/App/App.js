import "./App.css"
import Counter from "../Counter/Counter";

import Hello from "../Hello/Hello"

function App() {

  const namesArr = ['Alexandr', 'Sergey', 'Maria'];
  const infoObj = {title: 'Developer', age: 33}
  
  return (
    <div className="app">
      <h1>Application</h1>
      <Hello names={namesArr} info={infoObj} />
      <Counter />
    </div>
  )
}

export default App
