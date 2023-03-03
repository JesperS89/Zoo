import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AnimalDetails } from "./components/Zoo/animalDetails/animalDetails";
import { Home } from "./components/Zoo/home/home";
import { Zoo } from "./components/Zoo/zoo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Zoo />,
        children: [
          { path: "/", element: <Home />, index: true },
          { path: "/:name", element: <AnimalDetails /> },
        ],
      },
    ],
  },
]);
