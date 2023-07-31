import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar'

export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element= {<Chat/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Container>
    </>
  )
}

