import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import NoteDetails from "./pages/NoteDetails";
import EditForm from "./pages/EditForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Head from "./components/Head";
import { useAuth } from "./context/AuthContext";


function App() {
    const { user } = useAuth();

    return (
        <Router>
            <Head />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route path="/dashboard" element={user ? <Home /> : <Navigate to="/login" />} />
                <Route path="/add" element={user ? <AddForm /> : <Navigate to="/login" />} />
                <Route path="/details/:id" element={user ? <NoteDetails /> : <Navigate to="/login" />} />
                <Route path="/edit/:id" element={user ? <EditForm /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
