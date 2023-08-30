import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import ParticlesBg from "./component/particles/ParticlesBg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParticlesBg></ParticlesBg>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
