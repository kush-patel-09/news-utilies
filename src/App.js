import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<News key="general" category="general"/>}/>
        <Route path='/Business' element={<News key="Business" category="Business"/>}/>
        <Route path='/Entertainment' element={<News key="Entertainment" category="Entertainment"/>}/>
        <Route path='/Health' element={<News key="Health" category="Health"/>}/>
        <Route path='/science' element={<News key="science" category="science"/>}/>
        <Route path='/Sports' element={<News key="Sports" category="Sports"/>}/>
        <Route path='/Technology' element={<News key="Technology" category="Technology"/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}

