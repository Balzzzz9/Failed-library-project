import { useState } from 'react'
import './App.css'
import Button from './assets/Button'
import Button3 from './assets/Button3'
import Button4 from './assets/Button4'
import Button5 from './assets/Button5'
import Button6 from './assets/Button6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold text-black-300 underline text-center">Library</h1>
        <h1 classname="text-1xl">Menu Options:</h1>
      </div>
      <Button />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </main>
  )
}

export default App
