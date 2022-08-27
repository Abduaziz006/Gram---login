import Login_img from "./components/login_img";
import Login_well from "./components/login_well";
import Login_form from "./components/login_form";

function App() {
  return (
    <div className="App">
      <div className="one">
        <Login_img /> 
      </div>
      <div className="two"> 
        <Login_well />
        <Login_form />
      </div>
    </div>
  );
}

export default App;