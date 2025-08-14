import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route index path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
