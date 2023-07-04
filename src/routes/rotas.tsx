import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Repositories from '../views/Repositories';

export function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/repositories/:usuario' element={<Repositories />} />  
        </Routes>
    </BrowserRouter>
}

//dentro da mina rota de repositorios, ja passo o usuario que estou querendo buscar