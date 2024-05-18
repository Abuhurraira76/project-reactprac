import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/box'
import Navbar from './components/navbar'
export default function Project() {
    return <>
    <Navbar />
    <div className="flex items-center justify-around h-screen">
        <Box />
        
  </div>
    </>
}

