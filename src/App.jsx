import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import EmailList from "./views/EmailList";
import Header from "./views/Header";
import Mail from "./views/Mail";
import Sidebar from "./views/Sidebar";

function App() {
  return (

    <Router>

      <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />

          <Routes>

            <Route path="/mail" element={ <Mail /> }/>

            <Route path="/" element={ <EmailList /> }/>
              

          </Routes>

        </div>
        
      </div>

    </Router>

  );
}

export default App;
