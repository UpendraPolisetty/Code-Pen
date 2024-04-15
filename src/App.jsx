import { useState } from 'react'
// import './App.css'
import Home from './Components/Home';
import DataProvider from './context/DataProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <DataProvider>
      <Home />
      
    </DataProvider>
  )
}

export default App
