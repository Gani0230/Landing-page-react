import { useState } from 'react'
import './App.css'
import { Navabar } from './Components/Navbar'
import { RecoilRoot } from 'recoil'
import { Introduction } from './Components/Introduction'

function App() {

  return (
    <RecoilRoot>
      <Navabar />
      <Introduction />
    </RecoilRoot>
  )
}

export default App
