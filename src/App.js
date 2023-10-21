import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import SupportAndTickets from "./pages/SupportAndTickets";
import UserAdmins from "./pages/UserAdmins";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/companies" exact element={<Companies />}></Route>
          <Route path="/supportAndTickets" exact element={<SupportAndTickets />}></Route>
          <Route path="/userAdmins" exact element={<UserAdmins/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
