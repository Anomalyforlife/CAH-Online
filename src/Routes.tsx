import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthOrHome } from "./auth/AuthOrHome";
import AccountSettings from "./pages/AccountSettings";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AuthOrHome />}/>
      <Route path="/login" element={<AuthOrHome />} />
      <Route path="/account" element={<AccountSettings />} />
      <Route path="*" element={<>OH NO</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
