import { Route, Routes } from "react-router"
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Books from '../pages/Books';

type props = {
  isLoggedIn: boolean
}

const CustomRoutes = ({ isLoggedIn }: props) => {
  return <Routes>
    <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login />} />
    <Route path="/books" element={<Books />} />
  </Routes>
}

export default CustomRoutes