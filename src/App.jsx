import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Favorito from "./Favorito";
import Informativa from "./informativa";
import Original from "./Original";
import Usuarios from "./Usuarios";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorito">Favorito</Link>
        <Link to="/original">Original</Link>
        <Link to="/informativa">Informativa</Link>
        <Link to="/usuarios">Usuario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorito" element={<Favorito />} />
        <Route path="/original" element={<Original />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;