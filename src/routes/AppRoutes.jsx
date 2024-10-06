import { Route, Routes} from "react-router-dom"

// pages importation here
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default AppRoutes