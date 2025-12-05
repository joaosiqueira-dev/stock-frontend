import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Routes/routes.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserStorage } from './providers/userProvider.tsx'
import { ProductStorage } from './providers/productProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <UserStorage>
      <ProductStorage>
        <Router />
      </ProductStorage>
    </UserStorage>
    </BrowserRouter>
  </StrictMode>,
)
