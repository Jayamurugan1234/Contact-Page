import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Auth from "./components/auth/Auth";
import Dashboard from "./pages/Dashboard";
// import CreateContact from "./pages/CreateContact";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Auth />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        />

        {/* <Route
          path="/create"
          element={user ? <CreateContact /> : <Navigate to="/" />}
        /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;