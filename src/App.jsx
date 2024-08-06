import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './components/store/store'
import Watch from './components/Watch'
import MainContainer from './components/MainContainer'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Head />
        <Routes>
         
          <Route path="/" element={<Body />}>
          <Route path="/" element={<MainContainer />} />
          <Route path="/watch" element={<Watch/>}/>
          
          </Route>
        </Routes>
       
      </Router>
    </Provider>
  )
}

export default App
