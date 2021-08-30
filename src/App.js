import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/Nav";
import Cart from "./components/Cart";

function App() {
  return ( 
    <div className="App">
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
  );
}

export default App;
