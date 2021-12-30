import './App.css';
import img from "./assets/img.png"
import Profile from "./components/Profile/Profile"

function App() {
  let name = "Ali"
  const age = 20
  const button = <button>Submit</button>
  const name1 = "sara"
  const sayGoodBye = () => {
    return "Good Bye"
  }
  let arr = [1,2,3]
  return (
    <div className="App">
      <h1>Hello {name} you are {age} </h1>
      <p style={{color: "red", fontSize:60}}>this is a paragraph</p>
      <div>
        this is a div
      </div>
      <img src={img} alt="react logo" />
      {button}
      <br />
      {sayGoodBye()}
      {
        arr.map(val => (
          <div>{val}</div>
        ))
      }
      {/* conditions */}
      {/* If name1 is not null display it else display "Anonymous" */}
      <p>hello {name1 || "Anonymous"}</p>
      <p>It looks like you {name1? "have": "don't have"} a name</p>
      {/* display the form is name1 is null */}
      {
        !name1 && (
          <form>
            <label>Type your name here</label>
            <input type="text" />
          </form>
        )
      }
      <Profile />
    </div>
  );
}

export default App;

