import { Route, Routes } from "react-router-dom";
import "./App.scss";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
import CharacterInfo from "./pages/CharacterInfo";
import Notfound from "./pages/Notfound";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Header/>
      {/* <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="characters" element={<Characters />}></Route>
        <Route path='characters/:name' element={<CharacterInfo />}></Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes> */}
      <Routes path = "">
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       
        <Route path="/characters">
          <Route index element={<Characters/>}/>
          <Route path=":name" element={<CharacterInfo/>}/>
        </Route>
       
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
