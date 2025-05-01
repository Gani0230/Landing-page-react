import { useState } from 'react'
import './App.css'
import { Navabar } from './Components/Navbar'
import { RecoilRoot } from 'recoil'
import { Introduction } from './Components/Introduction'
import { Services } from './Components/Services'

function App() {

  return (
    <RecoilRoot>
      <Navabar />
      <Introduction />
      <Services />
    </RecoilRoot>
  )
}

export default App
