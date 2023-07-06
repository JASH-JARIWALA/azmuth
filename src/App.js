import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import UserData from "./pages/UserData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Landing />} />
            <Route path="/userdatasecretroute" element={<UserData />} />
            <Route path="*" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
