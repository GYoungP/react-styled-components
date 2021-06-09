import React from 'react'
import styled from 'styled-components'
import Button from './conponents/Button'


const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 1rem;
`

function App() {
  return (
    <AppBlock>
      <Button>BUTTON</Button>
    </AppBlock>
  );
}

export default App;
