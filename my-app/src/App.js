import Formulaire from "./Pages/formulaire";
import Catalogue from "./Pages/Catalogue.js";
import Contact from "./Pages/Contact.js";
import Acceuil from "./Pages/Accueil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./Components/Service";

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        <Route path="/" element={<Acceuil />}></Route>
        <Route path="/Devis" element={<Formulaire />}></Route>
        <Route path="/Catalogue" element={<Catalogue />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/services" element={<Service />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
