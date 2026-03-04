import { Route, Routes } from "react-router-dom"
import {Dashboard} from "../src/pages/Dashboard";
import { HashExplorer } from "./pages/HashExplorer";
import { Layout } from "./components/Layout";

function App() {

  
  return (
    <Routes>
    <Route element={<Layout/>} >
      <Route element={<Dashboard/>} path="/"/>
    <Route  element={<HashExplorer/>} path="/HashExplorer" />
    </Route>
  </Routes>
  
  )

  
}

export default App
