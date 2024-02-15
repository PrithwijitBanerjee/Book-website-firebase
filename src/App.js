import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/commons/Header";
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"
import SignUp from "./authentication/SignUp"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignIn from "./authentication/SignIn";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
