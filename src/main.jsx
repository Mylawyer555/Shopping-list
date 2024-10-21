import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



const reactElem = {
  type: "a",
  props:{
      href: "http://google.com",
      target: "_blank",
  },
  children: "Click Here to access Google"
}

function Myapp() {
  return (
    <div>
      <h1>Welcome To React!</h1>
      </div>
  )
}

const NewElement = (
  <a href='http//:google.com' target='_blank'></a>

)
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
