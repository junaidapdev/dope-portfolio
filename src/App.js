import { Route, Routes } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Products from "./pages/products";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import About from "./pages/about";


function App() {
  return (
    <div className="App">
    <Navbar/>

      {/* Routes */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
