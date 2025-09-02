import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links";
import NavBar from "./components/NavBar";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClientDetail from "./components/ClientDetail";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        {/* Routes go here */}
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients/:id" element={<ClientDetail />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
