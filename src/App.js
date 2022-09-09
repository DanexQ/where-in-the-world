import CountryList from "./components/CountryList";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage";
import Layout from "./components/Layout";
import { useContext } from "react";
import { CountryContext } from "./context/CountryContext";

function App() {
  const { colorMode } = useContext(CountryContext);

  return (
    <div className={`app ${colorMode}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CountryList />} />
          <Route path=":countryCode" element={<CountryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
