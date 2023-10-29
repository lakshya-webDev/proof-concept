import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes"
import "./styles/index.css"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Suspense>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
