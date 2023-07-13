import {React, useState} from 'react'

import style from './Menu.module.css'
import {Link} from 'react-router-dom'
export default function Menu () {
    const [menu, setMenu]= useState(false);
    return (
        <div className={style.Menu_Hamburger}>
            <button className={style.b_menu} onClick={()=> setMenu(!menu)}><span class="material-symbols-outlined">menu</span></button>
            {menu && (
               <main className={style.container_rotas}>
                   <Link className={style.linkss} to='/'>Home</Link>
                   <Link className={style.linkss} to='/servicos'>Serviços</Link>
                   <Link className={style.linkss} to='/projetos'>Projetos</Link>
                   <Link className={style.linkss} to='/contatos'>Contatos</Link>
               </main>
            )}
        </div>
    )
}