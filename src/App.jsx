import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Products from "./pages/Products"

import  DefaultLayout from "./layout/DefaultLayout"
import  {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<DefaultLayout/>}>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/products" element={<Products/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
