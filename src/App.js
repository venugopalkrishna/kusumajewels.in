import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import KusumaJewels from "./Components/HomePage/KusumaJewels";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KusumaJewels />} />
        {/* <Route
          path="*"
          element={
            isAuthenticated ? (
              <Routes>
                <Route path="/tax-invoice" element={<Tax_invoice />} />
                <Route path="/sale-return" element={<SaleReturn />} />
              </Routes>
            ) : (
              <Navigate to="/" />
            )
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
