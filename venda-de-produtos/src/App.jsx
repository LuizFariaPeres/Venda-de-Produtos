import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Cadastrar from './pages/Cadastrar';
import Produtos from './pages/Produtos';

function App() {

  return (
   <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cadastrar' element={<Cadastrar/>}/>
            <Route path='/produtos' element={<Produtos/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
