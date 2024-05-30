import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Gallery from './Gallery';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Poster from './Poster';
import Services from './Services';
import Dashboard from './Dashboard';
import Aboutpage from './Aboutpage';
import Ourrates from './Ourrates';
import Login from './Login';
import OpenRoute from './Admin/auth/OpenRoute';
import PrivateRoute from './Admin/auth/PrivateRoute';
import AddCab from './Admin/Sidebar/AddCab';
import AddRate from './Admin/Sidebar/AddRate';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="aboutpage" element={<Aboutpage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="poster" element={<Poster />} />
          <Route path="services" element={<Services />} />
          <Route path="rates" element={<Ourrates />} />

          <Route
            path="login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <AddCab />
              </PrivateRoute>
            }
          />
          <Route
            path="/createRate"
            element={
              <PrivateRoute>
                <AddRate />
              </PrivateRoute>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
