import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import Homepage from "./pages/homepage/Homepage"
import Bookingpage from "./pages/bookingpage/Bookingpage"
import Menupage from "./pages/menupage/Menupage"
import Teampage from "./pages/teampage/Teampage"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="team" element={<Teampage />} />
          <Route path="menu" element={<Menupage />} />
          <Route path="booking" element={<Bookingpage />} />
        </Route>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
