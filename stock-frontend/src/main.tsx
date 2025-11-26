import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Routes/routes.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserStorage } from './providers/userProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <UserStorage>
    <Router />
    </UserStorage>
    </BrowserRouter>
  </StrictMode>,
)
