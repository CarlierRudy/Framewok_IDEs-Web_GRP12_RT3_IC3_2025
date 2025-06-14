import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";


function App() {
  return (
    <div className="min-h-screen  flex flex-col items-left justify-center">
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App
