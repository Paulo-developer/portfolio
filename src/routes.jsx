import React from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom'

import Home from '../src/pages/Home/index.jsx'
import Servicos from '../src/pages/Servicos/index.jsx'
import Projetos from '../src/pages/Projetos/index.jsx'
import Contatos from '../src/pages/Contatos/index.jsx'
import Page404 from '../src/pages/Page404/index.jsx'


export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/servicos' element={<Servicos/>}></Route>
                <Route path='/projetos' element={<Projetos/>}></Route>
                <Route path='/contatos' element={<Contatos/>}></Route>
                <Route path='*' element={<Page404/>}></Route>
            </Routes>    
        </HashRouter>
    )
}