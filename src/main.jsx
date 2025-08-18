import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryProvider } from '@/lib/react-query/QueryProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <QueryProvider>
    
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

        <App />
      </QueryProvider>
    </BrowserRouter>
  </>,
)
