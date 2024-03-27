import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Ods from "./pages/Ods";
import PageBase from "./pages/PageBase";


function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<PageBase/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/ods" element={<Ods/>}></Route>
           </Route>
            </Routes>
            </BrowserRouter>
    )
}
export default AppRoutes