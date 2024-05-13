import { useState } from 'react'
import { Button } from '@pyxis/react';
import Row from './Row';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + Pyxis</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Row></Row>

    </>
  )
}

export default App
