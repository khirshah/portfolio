import React from 'react'
import HomePage from './pages/home/components/HomePage'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<HomePage tab='home' />)
