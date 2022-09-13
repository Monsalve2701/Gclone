import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import EmailList from "./views/EmailList";
import Header from "./views/Header";
import { Login } from "./views/Login";
import Mail from "./views/Mail";
import SendMail from "./views/SendMail";
import Sidebar from "./views/Sidebar";

function App() {
  const { sendMessageIsOpen } = useSelector((state) => state.mail);
  const { user } = useSelector((state) => state.user);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail />} />

              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIsOpen ? <SendMail /> : null}
        </div>
      )}
    </Router>
  );
}

export default App;
