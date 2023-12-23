// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/navigation/NavigationBar";
import { StorePage } from "./pages/Store";
import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/obchod" element={<StorePage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
