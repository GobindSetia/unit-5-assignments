import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './components/Counter'
import {Provider as ReduxProvider} from "react-redux"
import { store } from './Redux/store'
import { Todo } from './components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReduxProvider store={store}>
      <Counter/>
      <hr/>
      <Todo/>
      </ReduxProvider>
      
    </div>
  )
}

export default App
