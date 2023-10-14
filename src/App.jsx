import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Arrow from "./assets/arrow"
import Lightning from "./assets/lightning"
import Logo from "./assets/logo.png"
import ThanksPage from "./ThanksPage"
import HomePage from "./HomePage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/success",
          element: <ThanksPage />,
        },
      ],
    },
  ])
  return (
    <div className="box-border w-full h-full">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
