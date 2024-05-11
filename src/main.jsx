import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Planner from './components/EducatorPlanner/planner'
import Generator from './components/LoremGenerator/LoremFile'
import GroceryBud from './components/GroceryBud'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Planner /> */}
    {/* <Generator /> */}
    <GroceryBud />
  </React.StrictMode>,
)
