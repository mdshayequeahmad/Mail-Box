import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useSelector } from 'react-redux';
import Inbox from './pages/Inbox';
import Email from './pages/Email';

const App = () => {

  const user = useSelector((state) => state.mailBox.userInfo);

  const PrivateRoute = ({ children }) => {
    const isLoggedIn = user;
    return isLoggedIn ? children : <Navigate to="/signin" />;
  };

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/inbox"
          element={
            <PrivateRoute>
              <Inbox />
            </PrivateRoute>
          }
        />
        <Route
          path="/email/:id"
          element={
            <PrivateRoute>
              <Email />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App;