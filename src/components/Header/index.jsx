import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Hamburger from '../Menu/index.jsx'
export default function App() {
    return (
        <header className={style.header}>
            <h2 className={style.span}><span>p</span>auloo.dev</h2>
            <div className={style.navegacao}>
                <Link className={style.a} to='/'>Home</Link>
                <Link className={style.a} to='/servicos'>Serviços</Link>
                <Link className={style.a} to='/projetos'>Projetos</Link>
                <Link className={style.a} to='/contatos'>Contatos</Link>
                <Hamburger/>
            </div>
        </header>
    )
}