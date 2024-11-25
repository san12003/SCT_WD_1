import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Navigation from "./Navigation.jsx";
import Services from "./Services/Services.jsx";
import Abouts from "./Abouts/Abouts.jsx";
import Contacts from "./Contacts/Contacts.jsx";

function App() {

  return (
      <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'Services'} element={<Services/>}/>
              <Route path={'Abouts'} element={<Abouts/>}/>
              <Route path={'Contacts'} element={<Contacts/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App