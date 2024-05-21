// // import React from "react";
// // // import logo from './logo.svg';
// // import "./App.css";

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';
// import RestrictedRoute from './RestrictedRoute';

import Background from 'components/Base/Background';
// // import Loader from 'components/Loader';

const MainPage = lazy(() => import('./pages/Main'));
// const LoginPage = lazy(() => import("pages/Login"));
// const RegisterPage = lazy(() => import("pages/Register"));
// const ChatPage = lazy(() => import("pages/Chat"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Background />}>
        <Route index element={<MainPage />} />
        {/* <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/chat" component={RegisterPage} />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/chat" component={LoginPage} />}
        />
        <Route
          path="chat"
          element={<PrivateRoute redirectTo="/login" component={ChatPage} />}
        /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
