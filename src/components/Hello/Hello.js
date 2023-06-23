import './Hello.css'
import Welcome from '../Welcome/Welcome';

function Hello({names, info}) {
  return (
    <div className="Hello">
      <h1 className="title">Hello, {info.title}</h1>

      <ul>
        {names.map((name, index) => (
        <li key = {index} > {name}</li>
        ))}
      </ul>
      
      <Welcome isLoggedIn={true} />

    </div>

  )
}
export default Hello;