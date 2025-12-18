import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Routes/routes.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserStorage } from "./providers/userProvider.tsx";
import { ProductStorage } from "./providers/productProvider.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserStorage>
        <ProductStorage>
          <Router />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            limit={3}
          />
        </ProductStorage>
      </UserStorage>
    </BrowserRouter>
  </StrictMode>
);
