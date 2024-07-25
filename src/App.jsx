import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./main.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
