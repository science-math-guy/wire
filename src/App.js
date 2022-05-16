import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Routes>
        <Route path="/*" element={<AppRoute Component={Home}/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

const AppRoute = ({ Component }) => {
  return user ? <Component /> : <Navigate to="/login" />
}

export default App;
