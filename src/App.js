import CountryList from "./components/CountryList";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CountryList />} />
        <Route path=":countryCode" element={<CountryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
