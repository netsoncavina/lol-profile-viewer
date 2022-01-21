import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Card
        name="Pain Gaming"
        icon="4945"
        level={9999}
        champion="Ezreal"
        championPoints={500}
      />
    </div>
  );
}

export default App;
