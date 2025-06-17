import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MobileLp } from "./screens/MobileLp/MobileLp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MobileLp />
  </StrictMode>,
);
