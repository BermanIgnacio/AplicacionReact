import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Productos from '../Pages/Productos';
import Detalle from '../Pages/Detalle';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import NotFound from "../Pages/NotFound";
import ProductoAlta from '../Pages/ProductoAlta';
import ProductoEdit from '../Pages/ProductoEdit';
function Public() {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/product/page:page/:id' element={<Detalle/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/product/alta' element={<ProductoAlta/>} />
            <Route path='/product/page:page/edit/:id' element={<ProductoEdit/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default Public;