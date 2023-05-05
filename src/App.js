import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import About from './About';
import Features from './Features';
import Contact from './Contact';
import Error404 from './Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="About" element={<About />}/>
          <Route path="Features" element={<Features />}/>
          <Route path="Contact" element={<Contact />}/>
          <Route path="*" element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;