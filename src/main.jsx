
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes/Routes";
/* import App from "./App"; */
import './index.css'
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto">
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </div>
);