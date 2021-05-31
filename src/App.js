import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HomeLayout from "./Layouts/HomeLayout"
import Routes from "./router"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeLayout>
          <Routes />
        </HomeLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
