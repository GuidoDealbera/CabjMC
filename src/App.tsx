import { useEffect, useState } from "react"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Loader from "./Components/Loader/Loader"

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2700)
  }, [])
  return !loading ? (
    <>
      <Header/>
      <Home/>
    </>
  ) : (
    <Loader/>
  )
}

export default App
